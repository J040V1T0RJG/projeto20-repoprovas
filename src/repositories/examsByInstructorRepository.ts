import { prisma } from "../config/database";

const getExamsByInstructor = async () => {
    
    return await prisma.teacher.findMany({
        distinct: ["name"],
        select: {
            name: true,
            TeachersDiscipline: {
                select: {
                    discipline: {
                        select: {name: true}
                    },
                    Test: {
                        select: {
                            name: true,
                            pdfUrl: true,
                            category: {select: {name: true}}
                        }
                    }
                }
            }
        }
    });
/*
    return await prisma.test.findMany({
       distinct: ["teachersDisciplineId"],
        select: {
            TeachersDiscipline: {
                select: {
                    teacher: {select: {name: true}}
                }
            }
        }
    }) */
/*
    return await prisma.teachersDiscipline.findMany({
        distinct: ["teacherId", "disciplineId"],
        select: {
            teacher: {select: {name: true}},
            Test: {
                distinct: ["categoryId"],
                select: {
                    category: {select: {name: true}},
                    name: true,
                    pdfUrl: true,
                }
            }
        }
    })*/
/*
    return await prisma.$executeRaw`
    SELECT * FROM tests
    `*/
};

export {
    getExamsByInstructor
};