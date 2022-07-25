import app from "../src/app.js";
import supertest from "supertest";
import { createTest } from "./factories/testsFactory.js";
import { validToken } from "./factories/tokenFactory.js";
import { loginUser } from "./factories/userFactory.js";

let token: string;
beforeAll(async () => token = await validToken(loginUser()));

describe("Create test", () => {
    it("sucessfully create test, return status code 201", async () => {
        const test = createTest();
        const response = await supertest(app)
            .post("/tests")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toBe(201);
    });

    it("missing name, return status code 400", async () => {
        const test = createTest();
        delete test.name;
        const response = await supertest(app)
            .post("/tests")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toBe(400);
    });

    it("missing pdfUrl, return status code 400", async () => {
        const test = createTest();
        delete test.pdfUrl;
        const response = await supertest(app)
            .post("/tests")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toBe(400);
    });

    it("invalid categoryId, return status code 400", async () => {
        const test = createTest();
        delete test.categoryId;
        const response = await supertest(app)
            .post("/tests")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toBe(400);
    });

    it("invalid teacherDisciplineId, return status code 400", async () => {
        const test = createTest();
        delete test.teacherDisciplineId;
        const response = await supertest(app)
            .post("/tests")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toBe(400);
    });

    it("invalid token, return status code 401", async () => {
        const test = createTest();
        const response = await supertest(app)
            .post("/tests")
            .set("Authorization", `Bearer invalidToken`)
            .send(test);
        expect(response.status).toBe(401);
    });
});

describe("Get tests", () => {
    it("sucessfully get tests, return status code 200", async () => {
        const response = await supertest(app)
            .get("/tests")
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
    });

    it("invalid token, return status code 401", async () => {
        const response = await supertest(app)
            .get("/tests")
            .set("Authorization", `Bearer invalidToken`);
        expect(response.status).toBe(401);
    });
});