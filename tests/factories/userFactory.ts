import { faker } from "@faker-js/faker";

const userFactory = () => {
    const password = faker.internet.password();

    return {
        email: faker.internet.email(),
        password: password,
        passwordConfirm: password
    };
};

export {
    userFactory
};