import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsOptional, IsString } from 'class-validator';

export class PetResponse {
    @ApiProperty()
    @IsString()
    @IsDefined()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    animal_race?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    heigth?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    weight?: string;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    birth_date?: Date;

    @ApiProperty()
    @IsString()
    @IsDefined()
    sex: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    userId: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    id: string;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    createdAt: Date;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    updatedAt: Date;
}
