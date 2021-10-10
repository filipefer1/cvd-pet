import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreatePetDto } from '../../pets/dto/create-pet.dto';
import { UpdatePetDto } from '../../pets/dto/update-pet.dto';
import { PetsService } from '../../pets/pets.service';

@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Post()
    create(@Body() createPetDto: CreatePetDto) {
        return this.petsService.create(createPetDto);
    }

    @Get()
    findAll() {
        return this.petsService.findAll('teste');
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.petsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        return this.petsService.update(+id, updatePetDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.petsService.remove(+id);
    }
}
