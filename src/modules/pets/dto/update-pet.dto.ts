import { PickType } from '@nestjs/swagger';
import { CreatePetDto } from './create-pet.dto';

export class UpdatePetDto extends PickType(CreatePetDto, [
    'name',
    'animal_race',
    'birth_date',
    'height',
    'weight',
    'sex',
]) {}
