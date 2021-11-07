import { Column, Entity } from 'typeorm';
import { EntityBase } from '../../../shared/entity-base';

@Entity()
export class Vaccine extends EntityBase {
    @Column()
    name: string;
}
