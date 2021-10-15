import { Module } from '@nestjs/common';
import { PetsService } from './services/pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetRepository } from './pets.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PetRepository])],
    providers: [PetsService],
    exports: [PetsService],
})
export class PetsModule {}
