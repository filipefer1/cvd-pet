import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetRepository } from './repositories/pets.repository';
import { DoseRepository } from './repositories/dose.repository';
import { PetVaccinesRepository } from './repositories/pet-vaccines.repository';
import { PetVaccinesService } from './services/pet-vaccines.service';
import { DosesService } from './services/doses.service';
import { VaccineRepository } from './repositories/vaccines.repository';
import { VaccinesService } from './services/vaccines.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PetRepository,
            DoseRepository,
            PetVaccinesRepository,
            VaccineRepository,
        ]),
    ],
    providers: [PetsService, PetVaccinesService, DosesService, VaccinesService],
    exports: [PetsService, PetVaccinesService, DosesService, VaccinesService],
})
export class PetsModule {}
