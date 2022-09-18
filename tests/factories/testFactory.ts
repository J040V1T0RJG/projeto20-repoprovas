import { faker } from "@faker-js/faker";

const testFactory = () => {
    return {
        name: faker.lorem.word(),
        pdfUrl: faker.internet.url(),
        categoryId: 1,
        teachersDisciplineId: 1
    };
};

export {
    testFactory
};