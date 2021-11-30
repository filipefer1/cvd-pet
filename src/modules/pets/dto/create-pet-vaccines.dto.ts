import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsDateString,
    IsDefined,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';

export class CreateDose {
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

    order: number;

    @IsString()
    @IsOptional()
    @ApiProperty()
    dosage?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    veterinary?: string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    petVaccinesId?: string;
}

export class CreatePetVaccinesDto {
    @IsString()
    @IsDefined()
    @ApiProperty()
    vaccineId: string;

    @IsString()
    @IsDefined()
    @ApiProperty()
    petId: string;

    @ValidateNested({ each: true })
    @Type(() => CreateDose)
    @IsDefined()
    @ApiProperty({ type: [CreateDose] })
    doses: CreateDose[];
}
