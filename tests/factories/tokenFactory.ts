import app from "../../src/app.js";
import supertest from "supertest";
import { UserInsertData } from "../../src/repositories/userRepository.js";

export async function validToken(user: UserInsertData) {
    const response = await supertest(app).post("/login").send(user);
    return response.body.token;
}