import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterPetAddDeletedAt1638526733895 implements MigrationInterface {
    name = 'AlterPetAddDeletedAt1638526733895';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `pet` ADD `deletedAt` datetime(6) NULL',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `pet` DROP COLUMN `deletedAt`');
    }
}
