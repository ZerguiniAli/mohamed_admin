/*
  Warnings:

  - You are about to drop the `_contacttob2bservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_documenttob2bservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `document` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Contact` to the `b2bservice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `b2bservice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_contacttob2bservice` DROP FOREIGN KEY `_ContactTob2bservice_A_fkey`;

-- DropForeignKey
ALTER TABLE `_contacttob2bservice` DROP FOREIGN KEY `_ContactTob2bservice_B_fkey`;

-- DropForeignKey
ALTER TABLE `_documenttob2bservice` DROP FOREIGN KEY `_DocumentTob2bservice_A_fkey`;

-- DropForeignKey
ALTER TABLE `_documenttob2bservice` DROP FOREIGN KEY `_DocumentTob2bservice_B_fkey`;

-- AlterTable
ALTER TABLE `b2bservice` ADD COLUMN `Contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `document` LONGBLOB NOT NULL;

-- DropTable
DROP TABLE `_contacttob2bservice`;

-- DropTable
DROP TABLE `_documenttob2bservice`;

-- DropTable
DROP TABLE `contact`;

-- DropTable
DROP TABLE `document`;
