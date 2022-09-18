import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/database";
import { userFactory } from "./factories/userFactory";
/*
beforeEach(async() => {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
});

afterAll(async () => {
    await prisma.$disconnect();
});
*/
describe("Test POST /sign-in", () => {
    it("Should return statusCode 200 and token, if user is successfully logged in", async () => {
        const user = userFactory();

        await supertest(app).post("/sign-up").send(user);

        const result = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        const countData = Object.keys(result.body).length;

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Object);
        expect(countData).toBeGreaterThan(0);
    });

    it("Should return statusCode 422, if user request is not processed due to semantic errors", async () => {
        const user = {
            email: "invalidEmail",
            password: "random password"
        };

        const result = await supertest(app).post("/sign-in").send(user);

        expect(result.status).toBe(422);
    });

    it("Should return statusCode 401, if email does not exist in database", async () => {
        const user = userFactory();

        const result = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        expect(result.status).toBe(401);
    });

    it("Should return statusCode 401, if password is incorrect", async () => {
        const user = userFactory();

        await supertest(app).post("/sign-up").send(user);

        const result = await supertest(app).post("/sign-in").send({email: user.email, password: "senhaIncorreta"});

        expect(result.status).toBe(401);
    });
});

describe("Test POST /sign-up", () => {
    it("Should return statusCode 201, if user registered successfully", async () => {
        const user = userFactory();

        const result = await supertest(app).post("/sign-up").send(user);

        expect(result.status).toBe(201);
    });

    it("Should return statusCode 422, if user request is not processed due to semantic errors", async () => {
        const user = {
            email: "invalidEmail",
            password: "random password",
            passwordConfirm: "random password"
        };

        const result = await supertest(app).post("/sign-up").send(user);

        expect(result.status).toBe(422);
    });

    it("Should return statusCode 409, if user email already exists", async () => {
        const user = userFactory();

        await supertest(app).post("/sign-up").send(user);
        const result = await supertest(app).post("/sign-up").send(user);

        expect(result.status).toBe(409);
    });
});

