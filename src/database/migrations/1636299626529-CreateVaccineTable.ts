import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateVaccineTable1636299626529 implements MigrationInterface {
    name = 'CreateVaccineTable1636299626529';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP INDEX `IDX_b9b3cc92bf825d2a742fc38ae9` ON `pet`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` CHANGE `name` `vaccineId` varchar(255) NOT NULL',
        );
        await queryRunner.query(
            'CREATE TABLE `vaccine` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` DROP COLUMN `vaccineId`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` ADD `vaccineId` char(36) NULL',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` ADD UNIQUE INDEX `IDX_df925c6f29a41e3e17fac5ee3a` (`vaccineId`)',
        );
        await queryRunner.query(
            'CREATE UNIQUE INDEX `REL_df925c6f29a41e3e17fac5ee3a` ON `pet_vaccines` (`vaccineId`)',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` ADD CONSTRAINT `FK_df925c6f29a41e3e17fac5ee3a8` FOREIGN KEY (`vaccineId`) REFERENCES `vaccine`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` DROP FOREIGN KEY `FK_df925c6f29a41e3e17fac5ee3a8`',
        );
        await queryRunner.query(
            'DROP INDEX `REL_df925c6f29a41e3e17fac5ee3a` ON `pet_vaccines`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` DROP INDEX `IDX_df925c6f29a41e3e17fac5ee3a`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` DROP COLUMN `vaccineId`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` ADD `vaccineId` varchar(255) NOT NULL',
        );
        await queryRunner.query('DROP TABLE `vaccine`');
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` CHANGE `vaccineId` `name` varchar(255) NOT NULL',
        );
        await queryRunner.query(
            'CREATE UNIQUE INDEX `IDX_b9b3cc92bf825d2a742fc38ae9` ON `pet` (`mediaId`)',
        );
    }
}
