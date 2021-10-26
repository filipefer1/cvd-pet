import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsDefined()
    @ApiProperty()
    name: string;

    @IsString()
    @IsDefined()
    @ApiProperty()
    animal_race: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    heigth?: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    weight?: string;

    @IsDateString()
    @IsOptional()
    @ApiPropertyOptional()
    birth_date?: Date;

    @IsString()
    @IsDefined()
    @ApiProperty()
    sex: string;

    @ApiProperty()
    userId: string;
}
