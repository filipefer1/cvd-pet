import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, Validate } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsDefined()
    @ApiProperty()
    name: string;

    @IsEmail()
    @IsDefined()
    @ApiProperty()
    email: string;

    @IsString()
    @IsDefined()
    @ApiProperty()
    password: string;
}
