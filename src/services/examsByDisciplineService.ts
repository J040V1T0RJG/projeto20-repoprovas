import * as examsByDisciplineRepository from "../repositories/examsByDisciplineRepository";

const getExamsByDiscipline = async () => {
    const exams = await examsByDisciplineRepository.getExamsByDiscipline();

    return exams;
};

export {
    getExamsByDiscipline
};