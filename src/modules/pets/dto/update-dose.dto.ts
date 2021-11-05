import { IsDateString, IsString } from 'class-validator';

export class UpdateDoseDto {
    @IsDateString()
    application_date: Date;

    @IsDateString()
    manufacturing_date: Date;

    @IsDateString()
    expiration_date: Date;

    @IsString()
    dosage: string;

    @IsString()
    veterinary: string;
}
