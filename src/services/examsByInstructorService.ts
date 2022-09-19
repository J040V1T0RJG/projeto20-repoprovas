import * as examsByInstructorRepository from "../repositories/examsByInstructorRepository";

const getExamsByInstructor = async () => {
    const exams = await examsByInstructorRepository.getExamsByInstructor();
/*
    for (let i = 0; i < exams.length; i++) {
        for (let j = 0; j < exams[i].TeachersDiscipline.length; j++) {
            if (j > 0) {
                delete exams[i].TeachersDiscipline[j];
            };
        };
    }
*/
    const arrumar = [];
/*
    for (let i = 0; i < exams.length; i++) {
        for (let j = 0; j < exams[i].TeachersDiscipline.length; j++) {

        }
    }*/


    return exams;
};

export {
    getExamsByInstructor
};