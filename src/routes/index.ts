import { Router } from "express";

import authRouter from "./authRouter";
import testRouter from "./testRouter";
import examsByDisciplineRouter from "./examsByDisciplineRouter";

const router = Router();

router.use(authRouter);
router.use(testRouter);
router.use(examsByDisciplineRouter);

export default router;