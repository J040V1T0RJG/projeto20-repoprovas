import { prisma } from "../src/config/database";


module.exports = async () => {
    /*
    beforeEach(async() => {
        await prisma.$executeRaw`TRUNCATE TABLE users`;
        await prisma.$executeRaw`TRUNCATE TABLE tests`;
    });

    
    afterAll(async () => {
        await prisma.$disconnect();
    });
    */
   console.log("entrou no setup")
};
