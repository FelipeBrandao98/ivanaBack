/*
  Warnings:

  - You are about to drop the `Avaliations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Avaliations";

-- CreateTable
CREATE TABLE "Avaliation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "avaliation" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "imageId" INTEGER,

    CONSTRAINT "Avaliation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
