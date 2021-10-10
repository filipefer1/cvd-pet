import { EntityRepository, Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';

@EntityRepository(Pet)
export class PetRepository extends Repository<Pet> {}
