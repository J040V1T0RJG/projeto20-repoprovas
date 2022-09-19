import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";
import * as examsByInstructorController from "../controllers/examsByInstructorController";

const examsByInstructorRouter = Router();

examsByInstructorRouter.use(ensureAuthenticatedMiddleware);
examsByInstructorRouter.get("/viewing-exams-by-instructor", examsByInstructorController.getExamsByInstructor);

export default examsByInstructorRouter;