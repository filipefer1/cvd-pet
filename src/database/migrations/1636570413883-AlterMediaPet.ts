import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterMediaPet1636570413883 implements MigrationInterface {
    name = 'AlterMediaPet1636570413883';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP INDEX `IDX_df925c6f29a41e3e17fac5ee3a` ON `pet_vaccines`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` DROP FOREIGN KEY `FK_b9b3cc92bf825d2a742fc38ae9c`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` CHANGE `mediaId` `mediaId` char(36) NULL',
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
            'ALTER TABLE `pet` CHANGE `mediaId` `mediaId` char(36) NOT NULL',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` ADD CONSTRAINT `FK_b9b3cc92bf825d2a742fc38ae9c` FOREIGN KEY (`mediaId`) REFERENCES `media`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
        await queryRunner.query(
            'CREATE UNIQUE INDEX `IDX_df925c6f29a41e3e17fac5ee3a` ON `CVDPet`.`pet_vaccines` (`vaccineId`)',
        );
    }
}
