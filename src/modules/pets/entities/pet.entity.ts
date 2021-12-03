import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';
import { Media } from '../../medias/media.entity';
import { User } from '../../users/user.entity';

@Entity()
export class Pet extends EntityBase {
    @Column()
    name: string;

    @Column({ nullable: true })
    animal_race?: string;

    @Column({ nullable: true })
    height?: string;

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

    @OneToOne(() => Media, { nullable: true })
    @JoinColumn()
    media: Media;

    @Column({ nullable: true })
    mediaId?: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
