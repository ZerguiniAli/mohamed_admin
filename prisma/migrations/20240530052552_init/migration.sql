/*
  Warnings:

  - You are about to drop the `b2bservice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `b2bservice`;

-- CreateTable
CREATE TABLE `b2b` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,
    `sectors` VARCHAR(191) NOT NULL,
    `Contact` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `b2b_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
