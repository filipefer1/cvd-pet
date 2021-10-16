import { Injectable } from '@nestjs/common';
import { CreatePetVaccinesDto } from '../dto/create-pet-vaccines.dto';
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

        return this.petVaccinesRepository.save(petVaccine);
    }

    async findAll(petId: string) {
        const petVaccines = await this.petVaccinesRepository.find({
            relations: ['pet', 'doses'],
            where: { petId },
        });

        return petVaccines;
    }
}
