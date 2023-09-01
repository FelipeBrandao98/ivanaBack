/*
  Warnings:

  - Added the required column `descriptionDe` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionFr` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleDe` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEn` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleFr` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionDe` to the `CollectionCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEn` to the `CollectionCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionFr` to the `CollectionCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subdescriptionDe` to the `CollectionCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subdescriptionEn` to the `CollectionCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subdescriptionFr` to the `CollectionCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "descriptionDe" TEXT NOT NULL,
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "descriptionFr" TEXT NOT NULL,
ADD COLUMN     "titleDe" TEXT NOT NULL,
ADD COLUMN     "titleEn" TEXT NOT NULL,
ADD COLUMN     "titleFr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CollectionCategory" ADD COLUMN     "descriptionDe" TEXT NOT NULL,
ADD COLUMN     "descriptionEn" TEXT NOT NULL,
ADD COLUMN     "descriptionFr" TEXT NOT NULL,
ADD COLUMN     "subdescriptionDe" TEXT NOT NULL,
ADD COLUMN     "subdescriptionEn" TEXT NOT NULL,
ADD COLUMN     "subdescriptionFr" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "bodyDe" TEXT,
ADD COLUMN     "bodyEn" TEXT,
ADD COLUMN     "bodyFr" TEXT,
ADD COLUMN     "coverCreditDe" TEXT,
ADD COLUMN     "coverCreditEn" TEXT,
ADD COLUMN     "coverCreditFr" TEXT,
ADD COLUMN     "subtitleDe" TEXT,
ADD COLUMN     "subtitleEn" TEXT,
ADD COLUMN     "subtitleFr" TEXT,
ADD COLUMN     "titleDe" TEXT,
ADD COLUMN     "titleEn" TEXT,
ADD COLUMN     "titleFr" TEXT;

-- AlterTable
ALTER TABLE "NewsCategory" ADD COLUMN     "descriptionDe" TEXT,
ADD COLUMN     "descriptionEn" TEXT,
ADD COLUMN     "descriptionFr" TEXT;
