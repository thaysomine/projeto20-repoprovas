import client from "../config/database.js";
import { Test, User, Term, Categorie, TeacherDiscipline } from "@prisma/client";

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

export async function getByDiscipline() {
    const test = await client.term.findMany({
        select: {
            number: true,
            disciplines: {
                select: {
                    name: true,
                    teacherDiscipline: {
                        select: {
                            teacher: { select: { name: true } },
                            test: {
                                select: {
                                    name: true,
                                    pdfUrl: true,
                                    categories: { select: { name: true } },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return test;
}