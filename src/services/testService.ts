import * as testRepository from "../repositories/testRepository.js";

export async function insertTest(testData: testRepository.TestInsertData) {
    const { name, pdfUrl, categoryId, teacherDisciplineId } = testData;

    await testRepository.insert({
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId
    });
}

export async function getByDiscipline() {
    return await testRepository.getByDiscipline();
}

export async function getByTeacher() {
    return await testRepository.getByTeacher();
}