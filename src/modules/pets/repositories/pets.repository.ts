/* eslint-disable @typescript-eslint/no-empty-function */
import { EntityRepository, Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity';

@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {}

export class PetRepositoryFake {
    public create(): void {}
    public async save(): Promise<void> {}
    public async remove(): Promise<void> {}
    public async findOne(): Promise<void> {}
    public async find(): Promise<void> {}
}
