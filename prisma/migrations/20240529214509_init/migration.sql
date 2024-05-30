-- CreateTable
CREATE TABLE `_contacttob2bservice` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    INDEX `_ContactTob2bservice_B_index`(`B`),
    UNIQUE INDEX `_ContactTob2bservice_AB_unique`(`A`, `B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_documenttob2bservice` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    INDEX `_DocumentTob2bservice_B_index`(`B`),
    UNIQUE INDEX `_DocumentTob2bservice_AB_unique`(`A`, `B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `anonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tite` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,
    `date_preemption` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Anonce_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `b2bservice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tite` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `b2bservice_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Contact_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` LONGBLOB NULL,

    UNIQUE INDEX `Document_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `societe` VARCHAR(191) NOT NULL,
    `Non` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Telephone` VARCHAR(191) NOT NULL,
    `Region` VARCHAR(191) NOT NULL,
    `Nomutil` VARCHAR(191) NOT NULL,
    `MotdePase` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `offre` ENUM('Normal', 'Demo', 'VIP') NOT NULL DEFAULT 'Normal',

    UNIQUE INDEX `Inscription_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sectors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tite` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sectors_tite_key`(`tite`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_anoncesectors` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_anoncesectors_AB_unique`(`A`, `B`),
    INDEX `_anoncesectors_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_contacttob2bservice` ADD CONSTRAINT `_ContactTob2bservice_A_fkey` FOREIGN KEY (`A`) REFERENCES `contact`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_contacttob2bservice` ADD CONSTRAINT `_ContactTob2bservice_B_fkey` FOREIGN KEY (`B`) REFERENCES `b2bservice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_documenttob2bservice` ADD CONSTRAINT `_DocumentTob2bservice_A_fkey` FOREIGN KEY (`A`) REFERENCES `document`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_documenttob2bservice` ADD CONSTRAINT `_DocumentTob2bservice_B_fkey` FOREIGN KEY (`B`) REFERENCES `b2bservice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_anoncesectors` ADD CONSTRAINT `_anoncesectors_A_fkey` FOREIGN KEY (`A`) REFERENCES `anonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_anoncesectors` ADD CONSTRAINT `_anoncesectors_B_fkey` FOREIGN KEY (`B`) REFERENCES `sectors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
