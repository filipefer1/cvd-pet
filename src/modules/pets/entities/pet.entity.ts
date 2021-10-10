import { Column, Entity, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { User } from '../../users/user.entity';

@Entity()
export class Pet extends EntityBase {
    @Column()
    name: string;

    @Column({ nullable: true })
    animal_race?: string;

    @Column({ nullable: true })
    heigth?: string;

    @Column({ nullable: true })
    weight?: string;

    @Column({ nullable: true })
    birth_date?: Date;

    @Column()
    sex: string;

    @ManyToOne(() => User)
    user: User;

    @Column()
    userId: string;
}
