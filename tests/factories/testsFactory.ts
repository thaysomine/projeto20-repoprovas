import { faker } from '@faker-js/faker';

export function createTest() {
    return {
        name: faker.name.firstName(),
        pdfUrl: faker.internet.url(),
        categoryId: 1,
        teacherDisciplineId: 5,
    };
}