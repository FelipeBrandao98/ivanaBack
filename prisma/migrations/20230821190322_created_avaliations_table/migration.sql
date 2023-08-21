/*
  Warnings:

  - You are about to drop the column `coverId` on the `Avaliations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avaliations" DROP CONSTRAINT "Avaliations_coverId_fkey";

-- AlterTable
ALTER TABLE "Avaliations" DROP COLUMN "coverId",
ADD COLUMN     "imageId" INTEGER;

-- AddForeignKey
ALTER TABLE "Avaliations" ADD CONSTRAINT "Avaliations_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
