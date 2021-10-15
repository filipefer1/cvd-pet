import { Injectable } from '@nestjs/common';
import { CreatePetDto } from '../dto/create-pet.dto';
import { PetRepository } from '../pets.repository';

@Injectable()
export class PetVaccinesService {
    constructor(private readonly petRepository: PetRepository) {}

    async create(dto: CreatePetDto) {
        const pet = this.petRepository.create(dto);

        return this.petRepository.save(pet);
    }
}
