import { prisma } from "../src/config/database";

beforeEach(async() => {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
    await prisma.$executeRaw`TRUNCATE TABLE tests`;
});

afterAll(async () => {
    await prisma.$disconnect();
});



