/*
  Warnings:

  - You are about to drop the `anonce` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `anonce`;

-- CreateTable
CREATE TABLE `annonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `date_preemption` VARCHAR(191) NOT NULL,
    `sectors` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Anonce_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
