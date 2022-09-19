import * as examsByInstructorRepository from "../repositories/examsByInstructorRepository";

const getExamsByInstructor = async () => {
    const exams = await examsByInstructorRepository.getExamsByInstructor();

    return exams;
};

export {
    getExamsByInstructor
};