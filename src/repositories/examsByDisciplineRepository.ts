import { prisma } from "../config/database";

const getExamsByDiscipline = async () => {
    return await prisma.term.findMany({
        distinct: ["number"],
        select:{
            number: true,
            Discipline: {
                distinct: ["name"],
                select: {
                    name: true,
                    TeachersDiscipline: {
                        select: {
                            teacher: { select: {name: true}},
                            Test: {
                                select: {
                                    name: true,
                                    pdfUrl: true,
                                    category: {
                                        select: {
                                            name: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
};

export {
    getExamsByDiscipline
};