-- CreateTable
CREATE TABLE "Dicipline" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Dicipline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dicipline_name_key" ON "Dicipline"("name");
