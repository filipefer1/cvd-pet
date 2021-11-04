import { Injectable } from '@nestjs/common';
import { CreateDose } from '../dto/create-pet-vaccines.dto';
import { DoseRepository } from '../repositories/dose.repository';

@Injectable()
export class DosesService {
    constructor(private readonly doseRepository: DoseRepository) {}

    async create(dose: CreateDose) {
        const newDose = this.doseRepository.create(dose);

        return this.doseRepository.save(newDose);
    }
}
