import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMedia1634343225358 implements MigrationInterface {
    name = 'CreateMedia1634343225358';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `media` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `title` varchar(255) NOT NULL, `destination` varchar(255) NOT NULL, `originalName` varchar(255) NOT NULL, `key` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `media`');
    }
}
