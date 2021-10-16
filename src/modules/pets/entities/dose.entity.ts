import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { PetVaccines } from './pet-vaccines.entity';

@Entity()
export class Dose extends EntityBase {
    @Column({ nullable: true })
    application_date?: Date;

    @Column()
    expiration_date: Date;

    @Column()
    manufacturing_date: Date;

    @Column()
    order: number;

    @Column({ nullable: true })
    dosage?: string;

    @Column({ nullable: true })
    veterinary?: string;

    @ManyToOne(() => PetVaccines, (petVaccines) => petVaccines.doses)
    petVaccines: string;

    @Column()
    petVaccinesId: string;
}
