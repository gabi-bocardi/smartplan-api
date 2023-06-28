/*
  Warnings:

  - You are about to drop the column `Created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Refresh_token` on the `User` table. All the data in the column will be lost.
  - Made the column `Password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Created_at",
DROP COLUMN "Refresh_token",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "RefreshToken" TEXT,
ALTER COLUMN "Password" SET NOT NULL;
