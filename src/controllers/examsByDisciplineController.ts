import { Request, Response } from "express";
import * as examsByDisciplineService from "../services/examsByDisciplineService";

const getExamsByDiscipline = async (req: Request, res: Response) => {
    const exams = await examsByDisciplineService.getExamsByDiscipline();

    return res.status(200).send(exams)
};

export {
    getExamsByDiscipline
};