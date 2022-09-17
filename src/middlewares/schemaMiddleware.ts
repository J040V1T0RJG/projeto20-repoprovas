import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { wrongSchemaError } from "../utils/errorUtils";

const validateSchemaMiddleware = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            throw wrongSchemaError("Invalid data");
        };

        next();
    };
};

export {
    validateSchemaMiddleware
};