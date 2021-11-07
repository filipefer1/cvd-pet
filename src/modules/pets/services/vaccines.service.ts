import { Injectable, NotFoundException } from '@nestjs/common';
import { VaccineRepository } from '../repositories/vaccines.repository';

@Injectable()
export class VaccinesService {
    constructor(private readonly vaccineRepository: VaccineRepository) {}

    async findAll() {
        const vaccines = await this.vaccineRepository.find({
            select: ['id', 'name'],
            order: { name: 'ASC' },
        });

        return vaccines;
    }

    async findOne(id: string) {
        const vaccine = await this.vaccineRepository.findOne({
            where: { id },
        });

        if (!vaccine) {
            throw new NotFoundException('Vaccine not found');
        }

        return vaccine;
    }
}
