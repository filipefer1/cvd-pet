import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    ManyToMany,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { EntityBase } from '../../shared/entity-base';

@Entity()
export class User extends EntityBase {
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column('varchar', { length: 11, unique: true })
    cpf: string;

    validatePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }

    @BeforeInsert()
    private hashPassword() {
        if (this.password) {
            this.password = bcrypt.hashSync(this.password, 8);
        }
    }

    @BeforeUpdate()
    private encryptPassword(): void {
        if (this.password) {
            this.password = bcrypt.hashSync(this.password, 8);
        }
    }

    // public static of(params: Partial<User>): User {
    //     const user = new User();

    //     Object.assign(user, params);

    //     return user;
    // }
}
