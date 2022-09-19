import supertest from "supertest";
import app from "../src/app";
import { userFactory } from "./factories/userFactory";

describe("Test GET /viewing-exams-by-instructor", () => {
    it("Should return statusCode 200, if successful request", async () => {
        const user = userFactory();

        await supertest(app).post("/sign-up").send(user);
        const userData = await supertest(app).post("/sign-in").send({email: user.email, password: user.password});

        const token: string = userData.body.token;

        const result = await supertest(app).get("/viewing-exams-by-instructor").auth(token, { type: "bearer" }).send();
        const countData = result.body.length;

        expect(result.status).toBe(200);
        expect(result.body).toBeInstanceOf(Array);
        expect(countData).toBeGreaterThan(0);
    });

    it("Should return statusCode 401, if token is invalid", async () => {
        const token: string = "InvalidToken93erfg739rbf3b.niduwicrefuje.ajciweucun"

        const result = await supertest(app).get("/viewing-exams-by-instructor").auth(token, { type: "bearer" }).send();
        
        expect(result.status).toBe(401);
    });

    it("Should return statusCode 401, if token is not sent", async () => {
        const result = await supertest(app).get("/viewing-exams-by-instructor").send();
        
        expect(result.status).toBe(401);
    });
});