import { Router } from "express";

import authRouter from "./authRouter";
import testRouter from "./testRouter";
import examsByDisciplineRouter from "./examsByDisciplineRouter";
import examsByInstructorRouter from "./examsByInstructorRouter";

const router = Router();

router.use(authRouter);
router.use(testRouter);
router.use(examsByDisciplineRouter);
router.use(examsByInstructorRouter);

export default router;