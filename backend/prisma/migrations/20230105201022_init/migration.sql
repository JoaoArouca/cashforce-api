-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `departament` VARCHAR(191) NULL,
    `verificationCode` VARCHAR(191) NULL,
    `emailChecked` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cashforceAdm` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cnpjs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cnpj` VARCHAR(191) NOT NULL,
    `companyType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buyers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `tradingName` VARCHAR(191) NULL,
    `cashforceTax` VARCHAR(191) NULL,
    `responsibleName` VARCHAR(191) NULL,
    `responsibleEmail` VARCHAR(191) NULL,
    `responsiblePosition` VARCHAR(191) NULL,
    `responsiblePhone` VARCHAR(191) NULL,
    `responsibleMobile` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `postalCode` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `situation` VARCHAR(191) NULL,
    `situationDate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cnpjId` INTEGER NOT NULL,
    `confirm` BOOLEAN NOT NULL DEFAULT true,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `providers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `tradingName` VARCHAR(191) NULL,
    `cashforceTax` VARCHAR(191) NULL,
    `responsibleName` VARCHAR(191) NULL,
    `responsibleEmail` VARCHAR(191) NULL,
    `responsiblePosition` VARCHAR(191) NULL,
    `responsiblePhone` VARCHAR(191) NULL,
    `responsibleMobile` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `postalCode` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `bank` VARCHAR(191) NULL,
    `bankAgency` VARCHAR(191) NULL,
    `account` VARCHAR(191) NULL,
    `documents` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `situation` VARCHAR(191) NULL,
    `situationDate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cnpjId` INTEGER NOT NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sponsors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `tradingName` VARCHAR(191) NULL,
    `cashforceTax` VARCHAR(191) NULL,
    `responsibleName` VARCHAR(191) NULL,
    `responsibleEmail` VARCHAR(191) NULL,
    `responsiblePosition` VARCHAR(191) NULL,
    `responsiblePhone` VARCHAR(191) NULL,
    `responsibleMobile` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `postalCode` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `complement` VARCHAR(191) NULL,
    `neighborhood` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `bank` VARCHAR(191) NULL,
    `bankAgency` VARCHAR(191) NULL,
    `account` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `situation` VARCHAR(191) NULL,
    `situationDate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cnpjId` INTEGER NOT NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderNfId` VARCHAR(191) NOT NULL,
    `orderNumber` VARCHAR(191) NOT NULL,
    `orderPath` VARCHAR(191) NULL,
    `orderFileName` VARCHAR(191) NULL,
    `orderOriginalName` VARCHAR(191) NULL,
    `emissionDate` VARCHAR(191) NULL,
    `pdfFile` VARCHAR(191) NULL,
    `emitedTo` VARCHAR(191) NULL,
    `nNf` VARCHAR(191) NULL,
    `CTE` VARCHAR(191) NULL,
    `value` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cnpjId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `buyerId` INTEGER NOT NULL,
    `providerId` INTEGER NOT NULL,
    `orderStatusBuyer` VARCHAR(191) NOT NULL DEFAULT 'o',
    `orderStatusProvider` VARCHAR(191) NOT NULL DEFAULT '0',
    `deliveryReceipt` VARCHAR(191) NULL,
    `cargoPackingList` VARCHAR(191) NULL,
    `deliveryCtrc` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderportions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nDup` VARCHAR(191) NULL,
    `dVenc` VARCHAR(191) NULL,
    `vDup` VARCHAR(191) NULL,
    `availableToMarket` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tax` VARCHAR(191) NULL,
    `tariff` VARCHAR(191) NULL,
    `adValorem` VARCHAR(191) NULL,
    `float` VARCHAR(191) NULL,
    `iof` VARCHAR(191) NULL,
    `expiresIn` DATETIME(3) NOT NULL,
    `paymentStatusSponsor` BOOLEAN NOT NULL DEFAULT false,
    `paymentStatusProvider` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `orderId` INTEGER NOT NULL,
    `sponsorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `buyers` ADD CONSTRAINT `buyers_cnpjId_fkey` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `providers` ADD CONSTRAINT `providers_cnpjId_fkey` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sponsors` ADD CONSTRAINT `sponsors_cnpjId_fkey` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_cnpjId_fkey` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `buyers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderportions` ADD CONSTRAINT `orderportions_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offers` ADD CONSTRAINT `offers_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offers` ADD CONSTRAINT `offers_sponsorId_fkey` FOREIGN KEY (`sponsorId`) REFERENCES `sponsors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
