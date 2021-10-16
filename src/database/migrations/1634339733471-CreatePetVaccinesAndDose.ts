import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePetVaccinesAndDose1634339733471
    implements MigrationInterface
{
    name = 'CreatePetVaccinesAndDose1634339733471';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `pet_vaccines` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `name` varchar(255) NOT NULL, `petId` char(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `dose` (`id` char(36) NOT NULL, `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `application_date` datetime NULL, `expiration_date` datetime NOT NULL, `manufacturing_date` datetime NOT NULL, `order` int NOT NULL, `dosage` varchar(255) NULL, `veterinary` varchar(255) NULL, `petVaccinesId` char(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` ADD CONSTRAINT `FK_f112995db54b089f263c766df70` FOREIGN KEY (`petId`) REFERENCES `pet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
        await queryRunner.query(
            'ALTER TABLE `dose` ADD CONSTRAINT `FK_ae098affcd1b852648042f9e0e4` FOREIGN KEY (`petVaccinesId`) REFERENCES `pet_vaccines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `dose` DROP FOREIGN KEY `FK_ae098affcd1b852648042f9e0e4`',
        );
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` DROP FOREIGN KEY `FK_f112995db54b089f263c766df70`',
        );
        await queryRunner.query('DROP TABLE `dose`');
        await queryRunner.query('DROP TABLE `pet_vaccines`');
    }
}
