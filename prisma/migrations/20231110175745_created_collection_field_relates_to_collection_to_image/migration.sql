/*
  Warnings:

  - You are about to drop the `CollectionImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionImages" DROP CONSTRAINT "CollectionImages_collectionId_fkey";

-- DropTable
DROP TABLE "CollectionImages";
