import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterPetVaccines1638308549608 implements MigrationInterface {
    name = 'AlterPetVaccines1638308549608';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` DROP FOREIGN KEY `FK_df925c6f29a41e3e17fac5ee3a8`',
        );

        await queryRunner.query(
            'DROP INDEX `REL_df925c6f29a41e3e17fac5ee3a` ON `pet_vaccines`',
        );

        await queryRunner.query(
            'ALTER TABLE `pet_vaccines` ADD CONSTRAINT `FK_df925c6f29a41e3e17fac5ee3a8` FOREIGN KEY (`vaccineId`) REFERENCES `vaccine`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return;
    }
}
