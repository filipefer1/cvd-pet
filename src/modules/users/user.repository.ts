/* eslint-disable @typescript-eslint/no-empty-function */
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}

export class UserRepositoryFake {
    public create(): void {}
    public async save(): Promise<void> {}
    public async remove(): Promise<void> {}
    public async findOne(): Promise<void> {}
}
