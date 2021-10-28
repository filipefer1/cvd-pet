import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class Media extends EntityBase {
    @Column()
    title: string;

    @Column()
    destination: string;

    @Column()
    originalName: string;
}
