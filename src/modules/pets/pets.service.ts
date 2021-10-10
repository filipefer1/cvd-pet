import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';
import { PetRepository } from './pets.repository';

@Injectable()
export class PetsService {
    constructor(private readonly petRepository: PetRepository) {}

    async create(dto: CreatePetDto) {
        const pet = this.petRepository.create(dto);

        return this.petRepository.save(pet);
    }

    async findAll(userId: string) {
        return this.petRepository.find({
            where: { userId },
        });
    }

    async findOne(petId: string, userId: string) {
        const pet = await this.petRepository.findOne(petId, {
            where: { userId },
        });

        if (!pet) {
            throw new NotFoundException('Pet não encontrado');
        }
        return pet;
    }

    async update(petId: string, userId: string, dto: UpdatePetDto) {
        const pet = await this.findOne(petId, userId);
        this.updatePet(dto, pet);
        return this.petRepository.save(pet);
    }

    async remove(petId: string, userId: string) {
        const pet = await this.findOne(petId, userId);
        return this.petRepository.delete(pet.id);
    }

    private updatePet(dto: Partial<CreatePetDto>, pet: Pet) {
        Object.keys(dto).forEach((key) => {
            if (dto[key]) {
                pet[key] = dto[key];
            }
        });
    }
}
