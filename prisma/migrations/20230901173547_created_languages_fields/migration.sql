-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "descriptionDe" DROP NOT NULL,
ALTER COLUMN "descriptionEn" DROP NOT NULL,
ALTER COLUMN "descriptionFr" DROP NOT NULL,
ALTER COLUMN "titleDe" DROP NOT NULL,
ALTER COLUMN "titleEn" DROP NOT NULL,
ALTER COLUMN "titleFr" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CollectionCategory" ALTER COLUMN "descriptionDe" DROP NOT NULL,
ALTER COLUMN "descriptionEn" DROP NOT NULL,
ALTER COLUMN "descriptionFr" DROP NOT NULL,
ALTER COLUMN "subdescriptionDe" DROP NOT NULL,
ALTER COLUMN "subdescriptionEn" DROP NOT NULL,
ALTER COLUMN "subdescriptionFr" DROP NOT NULL;
