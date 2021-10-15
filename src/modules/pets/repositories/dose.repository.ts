import { EntityRepository, Repository } from 'typeorm';
import { Dose } from '../entities/dose.entity';

@EntityRepository(Dose)
export class DoseRepository extends Repository<Dose> {}
