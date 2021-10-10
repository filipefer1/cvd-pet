import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePet1633874408609 implements MigrationInterface {
    name = 'CreatePet1633874408609';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `pet` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, `animal_race` varchar(255) NULL, `heigth` varchar(255) NULL, `weight` varchar(255) NULL, `birth_date` datetime NULL, `sex` varchar(255) NOT NULL, `userId` char(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `user` CHANGE `updatedAt` `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        );
        await queryRunner.query(
            'ALTER TABLE `pet` ADD CONSTRAINT `FK_4eb3b1eeefc7cdeae09f934f479` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE`pet` DROP FOREIGN KEY `FK_4eb3b1eeefc7cdeae09f934f479`',
        );
        await queryRunner.query(
            'ALTER TABLE`user` CHANGE `updatedAt` `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP',
        );
        await queryRunner.query('DROP TABLE`pet`');
    }
}
