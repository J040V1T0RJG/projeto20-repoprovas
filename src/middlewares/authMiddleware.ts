import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import * as userRepository from "../repositories/userRepository";
import { unauthorizedError } from "../utils/errorUtils";

dotenv.config();

const ensureAuthenticatedMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) throw unauthorizedError("Missing authorization header");

    const token = authorization.replace("Bearer ", "");
    if (!token) throw unauthorizedError("Missing token");

    try {
        const SECRET = <string>process.env.TOKEN_SECRET_KEY;
        const { userId } = jwt.verify(token, SECRET) as { userId: number };
        const user = await userRepository.findUserById(userId);

        res.locals.user = user;

        next();
    } catch {
        throw unauthorizedError("Invalid token")
    };
};

export {
    ensureAuthenticatedMiddleware
};