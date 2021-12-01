import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { errorMessages } from '../../shared/error-messages';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: UserRepository,
    ) {}

    async create(dto: CreateUserDto) {
        await this.checkUserExistance(dto);

        const user = this.userRepository.create(dto);

        return this.userRepository.save(user);
    }

    async findByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email },
        });

        return user;
    }

    private async checkUserExistance(dto: CreateUserDto) {
        const userWithSameEmail = await this.emailExists(dto.email);

        if (userWithSameEmail) {
            throw new ConflictException(
                errorMessages.USER.EMAIL_ALREADY_EXISTS,
            );
        }

        return;
    }

    private async emailExists(email: string) {
        return !!(await this.findByEmail(email));
    }
}
