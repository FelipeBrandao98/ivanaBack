/*
  Warnings:

  - The primary key for the `CollectionClothes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CollectionClothes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CollectionClothes" DROP CONSTRAINT "CollectionClothes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CollectionClothes_pkey" PRIMARY KEY ("id");
