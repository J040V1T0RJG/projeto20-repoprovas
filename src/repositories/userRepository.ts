import { prisma } from "../config/database";
import { UserData } from "../services/userService";

const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
};

const insertUser = (user: UserData) => {
    return prisma.user.create({
        data: user
    });
};

export {
    findUserByEmail,
    insertUser
};