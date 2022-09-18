import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/database";
import { testFactory } from "./factories/testFactory";
import { userFactory } from "./factories/userFactory";
/*
beforeEach(async() => {
    await prisma.$executeRaw`TRUNCATE TABLE tests`;
});

afterAll(async () => {
    await prisma.$disconnect();
});
*/
describe("Test POST /test", () => {
    it("Should return statusCode 201, if proof created successfully", async () => {
        const user = userFactory();
        const test = testFactory();

        await supertest(app).post("/sign-up").send(user);
        const userData = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        const token: string = userData.body.token;
        const result = await supertest(app).post("/test").auth(token, { type: "bearer" }).send(test);

        expect(result.status).toBe(201);
    });

    it("Should return statusCode 422, if user request is not processed due to semantic errors", async () => {
        const user = userFactory();
        const test = {
            name: "test name",
            pdfUrl: "invalid url",
            categoryId: 1,
            teachersDisciplineId: 1
        };

        await supertest(app).post("/sign-up").send(user);
        const userData = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        const token: string = userData.body.token;

        console.log("it should return 422 token: ", token);

        const result = await supertest(app).post("/test").auth(token, { type: "bearer" }).send(test);

        expect(result.status).toBe(422);
    });

    it("Should return statusCode 404, if categoryId or teachersDisciplineId does not exist in database", async () => {
        const user = userFactory();
        const test = testFactory();

        test.categoryId = 9999999;
        test.teachersDisciplineId = 999999999999;

        await supertest(app).post("/sign-up").send(user);
        const userData = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        const token: string = userData.body.token;

        console.log("it should return 404 token: ", token);

        const result = await supertest(app).post("/test").auth(token, { type: "bearer" }).send(test);

        expect(result.status).toBe(404);
    });
});