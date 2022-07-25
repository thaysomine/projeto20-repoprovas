import client from "../config/database.js";
import { Test, User } from "@prisma/client";

// inserir prova no banco 
export type TestInsertData = Omit<Test, "id" | "createdAt">;

export async function insert(testData: TestInsertData) {
    const { name, pdfUrl, categoryId, teacherDisciplineId } = testData;

    await client.test.create({
        data: {
            name,
            pdfUrl,
            categoryId,
            teacherDisciplineId
        }
    });
}