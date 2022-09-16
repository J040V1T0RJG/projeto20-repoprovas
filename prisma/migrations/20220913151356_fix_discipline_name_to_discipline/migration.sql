/*
  Warnings:

  - You are about to drop the column `teachersDiciplineId` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the `diciplines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teachersDiciplines` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teachersDisciplineId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "diciplines" DROP CONSTRAINT "diciplines_termId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDiciplines" DROP CONSTRAINT "teachersDiciplines_diciplineId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDiciplines" DROP CONSTRAINT "teachersDiciplines_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teachersDiciplineId_fkey";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "teachersDiciplineId",
ADD COLUMN     "teachersDisciplineId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "diciplines";

-- DropTable
DROP TABLE "teachersDiciplines";

-- CreateTable
CREATE TABLE "disciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "termId" INTEGER NOT NULL,

    CONSTRAINT "disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachersDisciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_name_key" ON "disciplines"("name");

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teachersDisciplineId_fkey" FOREIGN KEY ("teachersDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
