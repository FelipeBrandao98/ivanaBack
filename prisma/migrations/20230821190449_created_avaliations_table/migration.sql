/*
  Warnings:

  - You are about to drop the column `imageId` on the `Avaliations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avaliations" DROP CONSTRAINT "Avaliations_imageId_fkey";

-- AlterTable
ALTER TABLE "Avaliations" DROP COLUMN "imageId",
ADD COLUMN     "coverId" INTEGER;

-- AddForeignKey
ALTER TABLE "Avaliations" ADD CONSTRAINT "Avaliations_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
