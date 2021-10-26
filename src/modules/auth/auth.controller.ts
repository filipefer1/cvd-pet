import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiBody({ type: LoginRequestDto })
    @ApiOkResponse({ type: LoginResponseDto })
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: any): Promise<LoginResponseDto> {
        return this.authService.login(req.user);
    }
}
