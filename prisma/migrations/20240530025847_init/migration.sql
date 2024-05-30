/*
  Warnings:

  - You are about to drop the column `tite` on the `b2bservice` table. All the data in the column will be lost.
  - Added the required column `title` to the `b2bservice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `b2bservice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `b2bservice` DROP COLUMN `tite`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;
