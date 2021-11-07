import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VaccineResponseDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    name: string;
}
