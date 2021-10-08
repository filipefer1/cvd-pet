import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

    async findByCpf(cpf: string) {
        const user = await this.userRepository.findOne({
            where: { cpf },
        });

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email },
        });

        return user;
    }

    private async checkUserExistance(dto: CreateUserDto) {
        const userWithSameCpf = await this.cpfExists(dto.cpf);

        if (userWithSameCpf) {
            throw new ConflictException('same cpf');
        }

        const userWithSameEmail = await this.emailExists(dto.email);

        if (userWithSameEmail) {
            throw new ConflictException('same email');
        }

        return;
    }

    private async cpfExists(cpf: string) {
        return !!(await this.findByCpf(cpf));
    }

    private async emailExists(email: string) {
        return !!(await this.findByEmail(email));
    }
}
