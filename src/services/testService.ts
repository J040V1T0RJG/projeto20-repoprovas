import { Test } from "@prisma/client";
import * as testRepository from "../repositories/testRepository";
import { notFoundError } from "../utils/errorUtils";

type CreateTestType = Omit<Test, "id">;

const createTest = async (test: CreateTestType) => {
    const existingCategory = await testRepository.findCategoryById(test.categoryId);

    if (!existingCategory) {
        throw notFoundError("Invalid categoryId")
    };

    const existingTeachersDiscipline = await testRepository.findTeachersDisciplineById(test.teachersDisciplineId);

    if (!existingTeachersDiscipline) {
        throw notFoundError("Invalid teachersDisciplineId")
    };

    await testRepository.insertTest(test);
};

export {
    CreateTestType,
    createTest
};