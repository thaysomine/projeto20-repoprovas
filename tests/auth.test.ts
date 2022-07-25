import supertest from "supertest";
import app from "../src/app.js";
import * as userFactory from "./factories/userFactory.js";

describe("Sign up", () => {
    it("sucessfully sign up, return status code 201", async () => {
        const user = userFactory.sucessUser();
        const response = await supertest(app).post("/signup").send(user);
        expect(response.status).toEqual(201);
    });

    it("missing email, return status code 400", async () => {
        const user = userFactory.missingEmailUser();
        const response = await supertest(app).post("/signup").send(user);
        expect(response.status).toEqual(400);
    });

    it("missing password, return status code 400", async () => {
        const user = userFactory.missingPasswordUser();
        const response = await supertest(app).post("/signup").send(user);
        expect(response.status).toEqual(400);
    });

    it("conflict email, return status code 400", async () => {
        const user = userFactory.conflictEmailUser();
        const response = await supertest(app).post("/signup").send(user);
        expect(response.status).toEqual(400);
    });
});

describe("Login", () => {
    it("sucessfully login, return status code 200", async () => {
        const user = userFactory.loginUser();
        const response = await supertest(app).post("/login").send(user);
        expect(response.status).toEqual(200);
        expect(response.body.token).toBeDefined();
    });

    it("wrong password, return status code 400", async () => {
        const user = userFactory.wrongPasswordUser();
        const response = await supertest(app).post("/login").send(user);
        expect(response.status).toEqual(400);
    });

    it("wrong email, return status code 400", async () => {
        const user = userFactory.wrongEmailUser();
        const response = await supertest(app).post("/login").send(user);
        expect(response.status).toEqual(400);
    });

    it("missing email, return status code 400", async () => {
        const user = userFactory.missingEmailUserLogin();
        const response = await supertest(app).post("/login").send(user);
        expect(response.status).toEqual(400);
    });

    it("missing password, return status code 400", async () => {
        const user = userFactory.missingPasswordUser();
        const response = await supertest(app).post("/login").send(user);
        expect(response.status).toEqual(400);
    });
});

