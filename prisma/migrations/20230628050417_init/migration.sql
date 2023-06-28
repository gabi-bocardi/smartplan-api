/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Receipts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `draft` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseDate` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `shop` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Receipts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Receipts` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_mame` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CategoryId` to the `Receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FileUrl` to the `Receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Price` to the `Receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProductName` to the `Receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PurchaseDate` to the `Receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Receipts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FirstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Receipts" DROP CONSTRAINT "Receipts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Receipts" DROP CONSTRAINT "Receipts_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "Receipts" DROP CONSTRAINT "Receipts_pkey",
DROP COLUMN "categoryId",
DROP COLUMN "createdAt",
DROP COLUMN "draft",
DROP COLUMN "fileUrl",
DROP COLUMN "id",
DROP COLUMN "price",
DROP COLUMN "productName",
DROP COLUMN "purchaseDate",
DROP COLUMN "shop",
DROP COLUMN "updateAt",
DROP COLUMN "userId",
ADD COLUMN     "CategoryId" INTEGER NOT NULL,
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Draft" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "FileUrl" TEXT NOT NULL,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "Price" INTEGER NOT NULL,
ADD COLUMN     "ProductName" TEXT NOT NULL,
ADD COLUMN     "PurchaseDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Shop" TEXT,
ADD COLUMN     "UpdateAt" TIMESTAMP(3),
ADD COLUMN     "UserId" INTEGER NOT NULL,
ADD CONSTRAINT "Receipts_pkey" PRIMARY KEY ("Id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "created_at",
DROP COLUMN "email",
DROP COLUMN "first_name",
DROP COLUMN "id",
DROP COLUMN "last_mame",
DROP COLUMN "password",
DROP COLUMN "refresh_token",
ADD COLUMN     "Created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "FirstName" TEXT NOT NULL,
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "LastName" TEXT NOT NULL,
ADD COLUMN     "Password" TEXT,
ADD COLUMN     "Refresh_token" TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("Id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
