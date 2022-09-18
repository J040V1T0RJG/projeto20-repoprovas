import { Request, Response } from "express";
import * as testService from "../services/testService";

const createTest = async (req: Request, res: Response) => {
    const body = req.body;

    await testService.createTest(body);

    return res.sendStatus(201);
};

export {
    createTest
};