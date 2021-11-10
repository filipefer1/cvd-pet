import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsOptional, IsString } from 'class-validator';
import { File } from '../../../shared/interfaces/file.interface';
import { Media } from '../../medias/media.entity';

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

    // @ApiProperty()
    // file: File;

    @ApiProperty()
    userId: string;

    media: Media;
}
