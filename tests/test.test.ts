import app from "../src/app.js";
import supertest from "supertest";
import { createTest } from "./factories/testsFactory.js";
import { validToken } from "./factories/tokenFactory.js";
import { loginUser } from "./factories/userFactory.js";

let token: string;
beforeAll(async () => {
    token = await validToken(loginUser());
});

describe("Create test", () => {
    it("sucessfully create test, return status code 201", async () => {
        const test = createTest();
        const response = await supertest(app)
            .post("/test")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
            console.log(response);
        expect(response.status).toEqual(201);
    });

    it("missing name, return status code 400", async () => {
        const test = createTest();
        delete test.name;
        const response = await supertest(app)
            .post("/test")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toEqual(400);
    });

    it("missing pdfUrl, return status code 400", async () => {
        const test = createTest();
        delete test.pdfUrl;
        const response = await supertest(app)
            .post("/test")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toEqual(400);
    });

    it("invalid categoryId, return status code 400", async () => {
        const test = createTest();
        delete test.categoryId;
        const response = await supertest(app)
            .post("/test")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toEqual(400);
    });

    it("invalid teacherDisciplineId, return status code 400", async () => {
        const test = createTest();
        delete test.teacherDisciplineId;
        const response = await supertest(app)
            .post("/test")
            .set("Authorization", `Bearer ${token}`)
            .send(test);
        expect(response.status).toEqual(400);
    });

    it("invalid token, return status code 401", async () => {
        const test = createTest();
        const response = await supertest(app)
            .post("/test")
            .set("Authorization", `Bearer invalidToken`)
            .send(test);
        expect(response.status).toEqual(400);
    });
});

describe("Get tests", () => {
    it("sucessfully get tests by disciplines, return status code 200", async () => {
        const response = await supertest(app)
            .get("/test/disciplines")
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });

    it("sucessfully get tests by teachers, return status code 200", async () => {
        const response = await supertest(app)
            .get("/test/teachers")
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });


    it("invalid token, return status code 401", async () => {
        const response = await supertest(app)
            .get("/test")
            .set("Authorization", `Bearer invalidToken`);
        expect(response.status).toEqual(400);
    });
});