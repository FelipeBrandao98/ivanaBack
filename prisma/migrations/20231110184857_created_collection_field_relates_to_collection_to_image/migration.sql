/*
  Warnings:

  - You are about to drop the column `cover` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `collectionId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_collectionId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "cover",
ADD COLUMN     "coverId" INTEGER;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "collectionId";

-- CreateTable
CREATE TABLE "CollectionImages" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "author" TEXT,
    "collectionId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CollectionImages_src_key" ON "CollectionImages"("src");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionImages" ADD CONSTRAINT "CollectionImages_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
