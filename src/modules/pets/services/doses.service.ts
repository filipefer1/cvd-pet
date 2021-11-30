import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDose } from '../dto/create-pet-vaccines.dto';
import { UpdateDoseDto } from '../dto/update-dose.dto';
import { DoseRepository } from '../repositories/dose.repository';

@Injectable()
export class DosesService {
    constructor(private readonly doseRepository: DoseRepository) {}

    async create(dose: CreateDose) {
        const lastDose = await this.doseRepository.find({
            where: { petVaccinesId: dose.petVaccinesId },
            order: { createdAt: 'DESC' },
            take: 1,
        });

        dose.order = lastDose[0] ? lastDose[0].order + 1 : 1;

        const newDose = this.doseRepository.create(dose);

        return this.doseRepository.save(newDose);
    }

    async update(doseId: string, dto: UpdateDoseDto) {
        const dose = await this.doseRepository.findOne(doseId);

        if (!dose) {
            throw new NotFoundException(`Dose with ID "${doseId}" not found`);
        }

        this.doseRepository.merge(dose, dto);

        return this.doseRepository.save(dose);
    }

    async findAll(petVaccinesId: string) {
        return this.doseRepository.find({
            where: { petVaccinesId },
            order: { order: 'ASC' },
        });
    }
}
