import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterPetProp1637017919169 implements MigrationInterface {
    name = 'AlterPetProp1637017919169';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `pet` CHANGE `heigth` `height` varchar(255) NULL',
        );
        await queryRunner.query('ALTER TABLE `pet` DROP COLUMN `height`');
        await queryRunner.query(
            'ALTER TABLE `pet` ADD `height` varchar(255) NULL',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `pet` DROP COLUMN `height`');
        await queryRunner.query(
            'ALTER TABLE `pet` ADD `height` varchar(255) NULL',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` CHANGE `height` `heigth` varchar(255) NULL',
        );
    }
}
