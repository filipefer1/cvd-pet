import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { PetVaccines } from './pet-vaccines.entity';

@Entity()
export class Dose extends EntityBase {
    @Column()
    application_date: Date;

    @Column()
    expiration_date: Date;

    @Column()
    manufacturing_date: Date;

    @Column()
    order: number;

    @Column()
    dosage: string;

    @Column()
    veterinary: string;

    @ManyToOne(() => PetVaccines, (petVaccines) => petVaccines.doses, {
        cascade: true,
    })
    pet_vaccines: string;

    @Column()
    pet_vaccines_id: string;
}
