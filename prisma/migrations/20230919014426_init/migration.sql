-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "AuthToken" TEXT,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Receipts" (
    "Id" SERIAL NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3),
    "ProductName" TEXT NOT NULL,
    "Shop" TEXT,
    "PurchaseDate" TIMESTAMP(3) NOT NULL,
    "Price" INTEGER NOT NULL,
    "FileRelativePath" TEXT NOT NULL,
    "CategoryId" INTEGER NOT NULL,
    "Draft" BOOLEAN NOT NULL DEFAULT true,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "Receipts_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Category" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "ColorHex" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
