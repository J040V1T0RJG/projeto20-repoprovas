import { NextFunction, Request, Response } from "express";
import { errorTypeToStatusCode, isAppError } from "../utils/errorUtils";

const handleErrorsMiddleware = (err: any, req: Request, res: Response, next: NextFunction ) => {
    console.log('Ooops! An error occured!', err);

    if (isAppError(err)) {
    const statusCode = errorTypeToStatusCode(err.type);

    return res.status(statusCode).send(err.message);
    };

    return res.sendStatus(500);
};

export {
    handleErrorsMiddleware
};