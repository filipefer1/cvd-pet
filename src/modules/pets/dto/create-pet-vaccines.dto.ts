import { Type } from 'class-transformer';
import {
    IsDateString,
    IsDefined,
    IsOptional,
    IsPositive,
    IsString,
    ValidateNested,
} from 'class-validator';

export class CreateDose {
    @IsDateString()
    application_date: Date;

    @IsDateString()
    @IsOptional()
    manufacturing_date?: Date;

    @IsDateString()
    @IsOptional()
    expiration_date?: Date;

    @IsPositive()
    order: number;

    @IsString()
    @IsOptional()
    dosage?: string;

    @IsString()
    @IsOptional()
    veterinary?: string;

    @IsString()
    @IsOptional()
    petVaccinesId?: string;
}

export class CreatePetVaccinesDto {
    @IsString()
    @IsDefined()
    name: string;

    @IsString()
    @IsDefined()
    petId: string;

    @ValidateNested({ each: true })
    @Type(() => CreateDose)
    @IsDefined()
    doses: CreateDose[];
}
