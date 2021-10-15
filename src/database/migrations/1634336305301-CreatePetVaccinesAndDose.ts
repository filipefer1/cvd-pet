import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePetVaccinesAndDose1634336305301
    implements MigrationInterface
{
    name = 'CreatePetVaccinesAndDose1634336305301';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `pet_vaccines` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `dose` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `application_date` datetime NOT NULL, `expiration_date` datetime NOT NULL, `manufacturing_date` datetime NOT NULL, `order` int NOT NULL, `dosage` varchar(255) NOT NULL, `veterinary` varchar(255) NOT NULL, `pet_vaccines_id` varchar(255) NOT NULL, `petVaccinesId` char(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `dose` ADD CONSTRAINT `FK_ae098affcd1b852648042f9e0e4` FOREIGN KEY (`petVaccinesId`) REFERENCES `pet_vaccines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `dose` DROP FOREIGN KEY `FK_ae098affcd1b852648042f9e0e4`',
        );
        await queryRunner.query('DROP TABLE `dose`');
        await queryRunner.query('DROP TABLE `pet_vaccines`');
    }
}
