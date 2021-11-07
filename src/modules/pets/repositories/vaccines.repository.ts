import { EntityRepository, Repository } from 'typeorm';
import { Vaccine } from '../entities/vaccine.entity';

@EntityRepository(Vaccine)
export class VaccineRepository extends Repository<Vaccine> {}
