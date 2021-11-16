import { ApiProperty } from '@nestjs/swagger';
import {
    IsDateString,
    IsDefined,
    IsOptional,
    IsPositive,
    IsString,
} from 'class-validator';

export class PetVaccinesResponseDto {
    @ApiProperty()
    @IsString()
    @IsDefined()
    id: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    createdAt: Date;
}

class ResponseDoseDto {
    @IsDateString()
    @ApiProperty()
    application_date: Date;

    @IsDateString()
    @IsOptional()
    @ApiProperty()
    manufacturing_date?: Date;

    @IsDateString()
    @IsOptional()
    @ApiProperty()
    expiration_date?: Date;

    @IsPositive()
    @ApiProperty()
    order: number;

    @IsString()
    @IsOptional()
    @ApiProperty()
    dosage?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    veterinary?: string;
}

export class PetVaccinesDetailsResponseDto {
    @ApiProperty()
    @IsString()
    @IsDefined()
    id: string;

    @ApiProperty()
    @IsString()
    @IsDefined()
    name: string;

    @IsDefined()
    @ApiProperty({ type: [ResponseDoseDto] })
    doses: ResponseDoseDto[];
}
