import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as userRepository from "../repositories/userRepository";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";

interface User {
    email: string
    password: string
    passwordConfirm: string
};

type CreateUserData = User
type UserData = Omit<User, "passwordConfirm">

const login = async (login: UserData) => {

};

const createUser = async (user: CreateUserData) => {
    const existingUser = await userRepository.findUserByEmail(user.email);

    if (existingUser) {
        throw conflictError("User already exist");
    };

    const SALT = 10;
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    const userData = {
        email: user.email,
        password: hashedPassword
    };

    await userRepository.insertUser(userData);
};

export {
    CreateUserData,
    UserData,
    login,
    createUser
};