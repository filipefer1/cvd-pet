import {
    IsDate,
    IsDateString,
    IsDefined,
    IsOptional,
    IsString,
} from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsDefined()
    name: string;

    @IsString()
    @IsDefined()
    animal_race: string;

    @IsString()
    @IsOptional()
    heigth?: string;

    @IsString()
    @IsOptional()
    weight?: string;

    @IsDateString()
    @IsOptional()
    birth_date?: Date;

    @IsString()
    @IsDefined()
    sex: string;

    userId: string;
}
