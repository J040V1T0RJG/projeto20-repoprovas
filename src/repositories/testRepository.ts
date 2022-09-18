import { prisma } from "../config/database";
import { CreateTestType } from "../services/testService";

const findCategoryById = async (id: number) => {
    return await prisma.category.findUnique({
        where: {
            id
        }
    });
};

const findTeachersDisciplineById = async (id: number) => {
    return await prisma.teachersDiscipline.findUnique({
        where: {
            id
        }
    });
};

const insertTest = async (test: CreateTestType) => {
    return await prisma.test.create({
        data: test
    });
};

export {
    findCategoryById,
    findTeachersDisciplineById,
    insertTest
};