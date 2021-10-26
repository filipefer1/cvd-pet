import { ApiProperty } from '@nestjs/swagger';

class PartialUser {
    @ApiProperty()
    email: string;

    @ApiProperty()
    id: string;

    @ApiProperty()
    createdAt: Date;
}

export class LoginResponseDto {
    @ApiProperty()
    user: PartialUser;

    @ApiProperty()
    accessToken: string;
}
