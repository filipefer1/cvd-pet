import { Column, Entity, OneToMany } from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { Dose } from './dose.entity';

@Entity()
export class PetVaccines extends EntityBase {
    @Column()
    name: string;

    @OneToMany(() => Dose, (dose) => dose.pet_vaccines)
    doses: Dose[];
}
