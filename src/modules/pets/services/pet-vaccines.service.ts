import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetVaccinesDto } from '../dto/create-pet-vaccines.dto';
import { PetVaccines } from '../entities/pet-vaccines.entity';
import { PetVaccinesRepository } from '../repositories/pet-vaccines.repository';
import { PetsService } from './pets.service';

@Injectable()
export class PetVaccinesService {
    constructor(
        private readonly petVaccinesRepository: PetVaccinesRepository,
        private readonly petsService: PetsService,
    ) {}

    async create(dto: CreatePetVaccinesDto, userId: string) {
        const pet = await this.petsService.findOne(dto.petId, userId);

        const petVaccine = this.petVaccinesRepository.create({
            name: dto.name,
            pet,
            doses: dto.doses,
        });

        const newPetVaccine = await this.petVaccinesRepository.save(petVaccine);

        return newPetVaccine;
    }

    async findAll(petId: string) {
        const petVaccines = await this.petVaccinesRepository.find({
            relations: ['pet', 'doses'],
            where: { petId },
            order: { createdAt: 'DESC' },
        });

        return this.formatPetVaccines(petVaccines);
    }

    async findOne(id: string, userId: string) {
        const petVaccine = await this.petVaccinesRepository.findOne(id, {
            relations: ['pet', 'doses'],
            where: { pet: { userId } },
        });

        if (!petVaccine) {
            throw new NotFoundException('Pet Vaccine not found');
        }

        const sortByOrder = (a: any, b: any) =>
            a.order > b.order ? 1 : b.order > a.order ? -1 : 0;

        petVaccine.doses.sort(sortByOrder);

        return this.formatPetVaccine(petVaccine);
    }

    private formatPetVaccines(petVaccines: PetVaccines[]) {
        const petVaccinesFormatted = petVaccines.map((petVaccine) => ({
            id: petVaccine.id,
            name: petVaccine.name,
            createdAt: petVaccine.createdAt,
        }));

        return petVaccinesFormatted;
    }

    private formatPetVaccine(petVaccine: PetVaccines) {
        const petVaccineFormatted = {
            id: petVaccine.id,
            name: petVaccine.name,
            doses: petVaccine.doses.map((dose) => ({
                id: dose.id,
                application_date: dose.application_date,
                expiration_date: dose.expiration_date,
                manufacturing_date: dose.manufacturing_date,
                order: dose.order,
                dosage: dose.dosage,
                veterinary: dose.veterinary,
            })),
        };

        return petVaccineFormatted;
    }
}
