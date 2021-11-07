import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { UserRepositoryFake } from './user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
    let userService: UserService;
    let userRepository: Repository<User>;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useClass: UserRepositoryFake,
                },
            ],
        }).compile();

        userService = app.get<UserService>(UserService);
        userRepository = app.get(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(userService).toBeDefined();
    });

    describe('create()', () => {
        it('should create a new user', async () => {
            const dto: CreateUserDto = {
                cpf: 'valid_cpf',
                email: 'valid_email',
                name: 'valid_name',
                password: 'valid_password',
            };
            const createdUserEntity = User.of(dto, User);

            const savedUser = User.of(
                {
                    id: 'uuid',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    ...dto,
                },
                User,
            );

            const userRepositoryCreateSpy = jest
                .spyOn(userRepository, 'create')
                .mockReturnValue(createdUserEntity);

            const userRepositorySaveSpy = jest
                .spyOn(userRepository, 'save')
                .mockResolvedValue(savedUser);

            const result = await userService.create(dto);

            expect.assertions(3);

            expect(userRepositoryCreateSpy).toBeCalledWith(dto);
            expect(userRepositorySaveSpy).toBeCalledWith(createdUserEntity);
            expect(result).toEqual(savedUser);
        });

        // it('should throw if a email alread', async () => {

        // })
    });
});
