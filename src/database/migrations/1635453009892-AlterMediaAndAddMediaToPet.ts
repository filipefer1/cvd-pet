import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterMediaAndAddMediaToPet1635453009892
    implements MigrationInterface
{
    name = 'AlterMediaAndAddMediaToPet1635453009892';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `media` DROP COLUMN `key`');
        await queryRunner.query(
            'ALTER TABLE `pet` ADD `mediaId` char(36) NOT NULL',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` ADD UNIQUE INDEX `IDX_b9b3cc92bf825d2a742fc38ae9` (`mediaId`)',
        );
        await queryRunner.query(
            'CREATE UNIQUE INDEX `REL_b9b3cc92bf825d2a742fc38ae9` ON `pet` (`mediaId`)',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` ADD CONSTRAINT `FK_b9b3cc92bf825d2a742fc38ae9c` FOREIGN KEY (`mediaId`) REFERENCES `media`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `pet` DROP FOREIGN KEY `FK_b9b3cc92bf825d2a742fc38ae9c`',
        );
        await queryRunner.query(
            'DROP INDEX `REL_b9b3cc92bf825d2a742fc38ae9` ON `pet`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` DROP INDEX `IDX_b9b3cc92bf825d2a742fc38ae9`',
        );
        await queryRunner.query('ALTER TABLE `pet` DROP COLUMN `mediaId`');
        await queryRunner.query(
            'ALTER TABLE `media` ADD `key` varchar(255) NOT NULL',
        );
    }
}
