import { Request, Response } from "express";
import * as examsByInstructorService from "../services/examsByInstructorService";

const getExamsByInstructor = async (req: Request, res: Response) => {
    const exams = await examsByInstructorService.getExamsByInstructor();

    return res.status(200).send(exams)
};

export {
    getExamsByInstructor
};