import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { Dose } from './dose.entity';
import { Pet } from './pet.entity';

@Entity()
export class PetVaccines extends EntityBase {
    @Column()
    name: string;

    @OneToMany(() => Dose, (dose) => dose.petVaccines, { cascade: true })
    doses: Dose[];

    @ManyToOne(() => Pet)
    pet: Pet;

    @Column()
    petId: string;
}
