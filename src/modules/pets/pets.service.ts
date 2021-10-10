import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetRepository } from './pets.repository';

@Injectable()
export class PetsService {
    constructor(private readonly petRepository: PetRepository) {}

    create(createPetDto: CreatePetDto) {
        return 'This action adds a new pet';
    }

    findAll(userId: string) {
        return this.petRepository.find({
            where: { userId },
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} pet`;
    }

    update(id: number, updatePetDto: UpdatePetDto) {
        return `This action updates a #${id} pet`;
    }

    remove(id: number) {
        return `This action removes a #${id} pet`;
    }
}
