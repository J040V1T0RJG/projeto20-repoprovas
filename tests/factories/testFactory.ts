import { faker } from "@faker-js/faker";

const testFactory = (numberOfCategories: number, numberOfTeachersDisciplines: number) => {
    return {
        name: faker.lorem.word(),
        pdfUrl: faker.internet.url(),
        categoryId: Math.floor(Math.random() * numberOfCategories) + 1,
        teachersDisciplineId: Math.floor(Math.random() * numberOfTeachersDisciplines) + 1
    };
};

export {
    testFactory
};