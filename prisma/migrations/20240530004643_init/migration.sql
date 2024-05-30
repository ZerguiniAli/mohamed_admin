/*
  Warnings:

  - You are about to drop the `_anoncesectors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sectors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sectors` to the `anonce` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_anoncesectors` DROP FOREIGN KEY `_anoncesectors_A_fkey`;

-- DropForeignKey
ALTER TABLE `_anoncesectors` DROP FOREIGN KEY `_anoncesectors_B_fkey`;

-- AlterTable
ALTER TABLE `anonce` ADD COLUMN `sectors` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_anoncesectors`;

-- DropTable
DROP TABLE `sectors`;
