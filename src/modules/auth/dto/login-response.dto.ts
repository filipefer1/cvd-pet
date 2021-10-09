import { User } from '../../users/user.entity';

export class LoginResponseDto {
    user: Partial<User>;

    accessToken: string;
}
