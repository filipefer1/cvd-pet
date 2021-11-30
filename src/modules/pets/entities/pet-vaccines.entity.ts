import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
} from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { Dose } from './dose.entity';
import { Pet } from './pet.entity';
import { Vaccine } from './vaccine.entity';

@Entity()
export class PetVaccines extends EntityBase {
    @ManyToOne(() => Vaccine)
    vaccine: Vaccine;

    @ManyToOne(() => Pet)
    pet: Pet;

    @Column()
    petId: string;

    @OneToMany(() => Dose, (dose) => dose.petVaccines, {
        cascade: ['insert', 'update'],
    })
    doses: Dose[];
}
