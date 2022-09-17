import { Router } from "express";
import * as testController from "../controllers/testController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { testSchema } from "../schemas/testSchemas";

const testRouter = Router();

testRouter.use(ensureAuthenticatedMiddleware);
testRouter.post("/test",validateSchemaMiddleware(testSchema), testController.createTest);

export default testRouter;