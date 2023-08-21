-- CreateTable
CREATE TABLE "Avaliations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "avaliation" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "coverId" INTEGER,
    "likes" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Avaliations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Avaliations" ADD CONSTRAINT "Avaliations_coverId_fkey" FOREIGN KEY ("coverId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
