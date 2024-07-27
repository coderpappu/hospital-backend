-- AlterTable
ALTER TABLE `admins` MODIFY `isDeleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` MODIFY `needPasswordChange` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `status` ENUM('ACTIVE', 'BLOCKED') NOT NULL DEFAULT 'ACTIVE';
