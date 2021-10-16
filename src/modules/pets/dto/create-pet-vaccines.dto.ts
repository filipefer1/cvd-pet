import { Type } from 'class-transformer';
import {
    IsDateString,
    IsDefined,
    IsPositive,
    IsString,
    ValidateNested,
} from 'class-validator';

export class CreateDose {
    @IsDateString()
    application_date: Date;

    @IsDateString()
    manufacturing_date: Date;

    @IsDateString()
    expiration_date: Date;

    @IsPositive()
    order: number;

    @IsString()
    dosage: string;

    @IsString()
    veterinary: string;
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
