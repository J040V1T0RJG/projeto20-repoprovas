/*
  Warnings:

  - You are about to drop the `Term` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Term";

-- CreateTable
CREATE TABLE "teachersDiciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "diciplineId" INTEGER NOT NULL,

    CONSTRAINT "teachersDiciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terms" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "terms_number_key" ON "terms"("number");

-- AddForeignKey
ALTER TABLE "teachersDiciplines" ADD CONSTRAINT "teachersDiciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDiciplines" ADD CONSTRAINT "teachersDiciplines_diciplineId_fkey" FOREIGN KEY ("diciplineId") REFERENCES "diciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
