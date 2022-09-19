import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";
import * as examsByDisciplineController from "../controllers/examsByDisciplineController";

const examsByDisciplineRouter = Router();

examsByDisciplineRouter.use(ensureAuthenticatedMiddleware);
examsByDisciplineRouter.get("/viewing-exams-by-discipline", examsByDisciplineController.getExamsByDiscipline);

export default examsByDisciplineRouter;