/*
  Warnings:

  - Added the required column `sectors` to the `b2bservice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `b2bservice` ADD COLUMN `sectors` VARCHAR(191) NOT NULL;
