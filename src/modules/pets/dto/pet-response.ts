import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsOptional, IsString } from 'class-validator';

class BasePetResponse {
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
    animal_race: string;
}
export class PetResponse extends BasePetResponse {
    @ApiProperty()
    @IsString()
    @IsOptional()
    image?: string | null;
}

export class PetDetailsResponse extends BasePetResponse {
    @ApiProperty()
    @IsString()
    @IsOptional()
    height: string;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    birth_date: Date;

    @ApiProperty()
    @IsString()
    @IsOptional()
    sex: string;
}
