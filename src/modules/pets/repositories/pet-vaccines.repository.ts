import { EntityRepository, Repository } from 'typeorm';
import { PetVaccines } from '../entities/pet-vaccines.entity';

@EntityRepository(PetVaccines)
export class PetVaccinesRepository extends Repository<PetVaccines> {}
