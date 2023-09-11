/*
  Warnings:

  - Added the required column `phone` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "bride" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "bridesmaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "debutant" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "groom" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "party" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phone" INTEGER NOT NULL;
