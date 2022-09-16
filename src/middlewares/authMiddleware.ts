import { Request, Response, NextFunction } from "express";
import * as authSchemas from "../schemas/authSchemas";
import { validateSchema } from "../utils/validateSchemas";

const validateSignIn = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    validateSchema(authSchemas.signInSchema, body);

    next();
};

const validateSignUp = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    validateSchema(authSchemas.signUpSchema, body);

    next();
};

export {
    validateSignIn,
    validateSignUp
};