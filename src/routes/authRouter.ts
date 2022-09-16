import { Router } from "express";
import * as authController from "../controllers/authController";
import * as authMiddleware from "../middlewares/authMiddleware";

const authRouter = Router();

authRouter.post("/sign-in", authMiddleware.validateSignIn, authController.signIn);
authRouter.post("/sign-up", authMiddleware.validateSignUp, authController.signUp);

export default authRouter;
