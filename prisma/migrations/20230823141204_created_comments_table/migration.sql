/*
  Warnings:

  - You are about to drop the `Avaliation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avaliation" DROP CONSTRAINT "Avaliation_imageId_fkey";

-- DropTable
DROP TABLE "Avaliation";

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "avaliation" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "imageId" INTEGER,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
