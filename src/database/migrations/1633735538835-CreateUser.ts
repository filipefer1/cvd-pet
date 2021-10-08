import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1633735538835 implements MigrationInterface {
    name = 'CreateUser1633735538835';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `user` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `cpf` varchar(11) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), UNIQUE INDEX `IDX_a6235b5ef0939d8deaad755fc8` (`cpf`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'DROP INDEX `IDX_a6235b5ef0939d8deaad755fc8` ON `user`',
        );
        await queryRunner.query(
            'DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`',
        );
        await queryRunner.query('DROP TABLE `user`');
    }
}
