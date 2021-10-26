import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class LoginRequestDto {
    @IsString()
    @IsDefined()
    @ApiProperty()
    username: string;

    @IsDefined()
    @IsString()
    @ApiProperty()
    password: string;
}
