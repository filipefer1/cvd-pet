import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from '../dto/create-pet.dto';
import { PetResponse } from '../dto/pet-response';
import { UpdatePetDto } from '../dto/update-pet.dto';
import { Pet } from '../entities/pet.entity';
import { PetRepository } from '../repositories/pets.repository';

@Injectable()
export class PetsService {
    constructor(private readonly petRepository: PetRepository) {}

    async create(dto: CreatePetDto): Promise<Pet> {
        const pet = this.petRepository.create(dto);

        return this.petRepository.save(pet);
    }

    async findAll(userId: string): Promise<PetResponse[]> {
        const pets = await this.petRepository.find({
            relations: ['media'],
            where: { userId },
            order: { createdAt: 'DESC' },
        });

        return this.formatPets(pets);
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

    private formatPets(pets: Pet[]) {
        return pets.map((pet) => ({
            id: pet.id,
            name: pet.name,
            animal_race: pet.animal_race,
            image: pet.media?.destination ? pet.media?.destination : null,
            weight: pet.weight,
            height: pet.height,
            birth_date: pet.birth_date,
            sex: pet.sex,
        }));
    }
}
