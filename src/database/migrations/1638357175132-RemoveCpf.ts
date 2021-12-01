import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveCpf1638357175132 implements MigrationInterface {
    name = 'RemoveCpf1638357175132';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP INDEX `IDX_a6235b5ef0939d8deaad755fc8` ON `user`',
        );
        await queryRunner.query('ALTER TABLE `user` DROP COLUMN `cpf`');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `user` ADD `cpf` varchar(11) NOT NULL',
        );
        await queryRunner.query(
            'CREATE UNIQUE INDEX `IDX_a6235b5ef0939d8deaad755fc8` ON `user` (`cpf`)',
        );
    }
}
