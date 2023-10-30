-- CreateTable
CREATE TABLE "CollectionClothes" (
    "id" TEXT NOT NULL,
    "collectionId" INTEGER,
    "coverId" INTEGER,
    "likes" INTEGER,
    "name" TEXT NOT NULL,
    "nameDe" TEXT NOT NULL,
    "nameFr" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionClothes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CollectionClothes" ADD CONSTRAINT "CollectionClothes_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionClothes" ADD CONSTRAINT "CollectionClothes_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
