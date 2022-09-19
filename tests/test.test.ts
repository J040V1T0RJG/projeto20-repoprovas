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
        const numberOfCategories: number = await prisma.category.count();
        const numberOfTeachersDisciplines: number = await prisma.teachersDiscipline.count();

        const user = userFactory();
        const test = testFactory(numberOfCategories, numberOfTeachersDisciplines);

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

        const result = await supertest(app).post("/test").auth(token, { type: "bearer" }).send(test);

        expect(result.status).toBe(422);
    });

    it("Should return statusCode 404, if categoryId or teachersDisciplineId does not exist in database", async () => {
        const numberOfCategories: number = await prisma.category.count();
        const numberOfTeachersDisciplines: number = await prisma.teachersDiscipline.count();
        
        const user = userFactory();
        const test = testFactory(numberOfCategories, numberOfTeachersDisciplines);

        test.categoryId = 9999999;
        test.teachersDisciplineId = 999999999999;

        await supertest(app).post("/sign-up").send(user);
        const userData = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        const token: string = userData.body.token;

        const result = await supertest(app).post("/test").auth(token, { type: "bearer" }).send(test);

        expect(result.status).toBe(404);
    });

    it("Should return statusCode 401, if token is invalid", async () => {
        const numberOfCategories: number = await prisma.category.count();
        const numberOfTeachersDisciplines: number = await prisma.teachersDiscipline.count();

        const test = testFactory(numberOfCategories, numberOfTeachersDisciplines);

        const token: string = "InvalidToken93erfg739rbf3b.niduwicrefuje.ajciweucun"

        const result = await supertest(app).post("/test").auth(token, { type: "bearer" }).send(test);
        
        expect(result.status).toBe(401);
    });

    it("Should return statusCode 401, if token is not sent", async () => {
        const numberOfCategories: number = await prisma.category.count();
        const numberOfTeachersDisciplines: number = await prisma.teachersDiscipline.count();

        const test = testFactory(numberOfCategories, numberOfTeachersDisciplines);

        const result = await supertest(app).post("/test").send(test);
        
        expect(result.status).toBe(401);
    });
});