import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetRepository } from './repositories/pets.repository';
import { DoseRepository } from './repositories/dose.repository';
import { PetVaccinesRepository } from './repositories/pet-vaccines.repository';
import { PetVaccinesService } from './services/pet-vaccines.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PetRepository,
            DoseRepository,
            PetVaccinesRepository,
        ]),
    ],
    providers: [PetsService, PetVaccinesService],
    exports: [PetsService, PetVaccinesService],
})
export class PetsModule {}
