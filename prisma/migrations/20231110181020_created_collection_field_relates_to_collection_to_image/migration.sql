/*
  Warnings:

  - You are about to drop the column `coverId` on the `Collection` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_coverId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "coverId",
ADD COLUMN     "cover" TEXT;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "collectionId" INTEGER;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
