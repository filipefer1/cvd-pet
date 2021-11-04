import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, Validate } from 'class-validator';
import { CpfValidator } from '../../validators/cpf.validator';

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

    @IsString()
    @IsDefined()
    @Validate(CpfValidator)
    @ApiProperty()
    cpf: string;
}
