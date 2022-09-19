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
};

export {
    getExamsByInstructor
};