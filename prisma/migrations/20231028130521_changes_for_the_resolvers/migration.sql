/*
  Warnings:

  - You are about to drop the column `income` on the `Purchase` table. All the data in the column will be lost.
  - Changed the type of `type` on the `Training` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TrainingType" AS ENUM ('SOLO', 'GROUP', 'TRAINER');

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "income";

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "type",
ADD COLUMN     "type" "TrainingType" NOT NULL;
