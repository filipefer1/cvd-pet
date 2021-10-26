import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../auth/auth.service';
import { LoginResponseDto } from '../../auth/dto/login-response.dto';
import { CreateUserDto } from '../../users/create-user.dto';
import { UserService } from '../../users/user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Post()
    @ApiBody({ type: CreateUserDto })
    @ApiOkResponse({ type: LoginResponseDto })
    async create(
        @Body(ValidationPipe) dto: CreateUserDto,
    ): Promise<LoginResponseDto> {
        const user = await this.userService.create(dto);

        return this.authService.login(user);
    }
}
