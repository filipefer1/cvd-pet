import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export class EntityBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        precision: 0,
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        precision: 0,
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    public static of<Type>(
        params: Partial<Type>,
        type: { new (): Type },
    ): Type {
        const entity = new type();

        Object.assign(entity, params);

        return entity;
    }
}
