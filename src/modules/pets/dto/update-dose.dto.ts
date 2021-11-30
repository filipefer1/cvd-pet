import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateDoseDto {
    @ApiProperty()
    @IsDateString()
    @IsOptional()
    application_date?: Date;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    manufacturing_date?: Date;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    expiration_date?: Date;

    @ApiProperty()
    @IsString()
    @IsOptional()
    dosage?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    veterinary?: string;
}
