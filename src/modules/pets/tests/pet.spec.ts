import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetsService } from '../services/pets.service';
import { Pet } from '../entities/pet.entity';
import { PetRepositoryFake } from '../repositories/pets.repository';
import { CreatePetDto } from '../dto/create-pet.dto';
import { Media } from '../../medias/media.entity';
import { File } from '../../../shared/interfaces/file.interface';

describe('PetService', () => {
    let petService: PetsService;
    let petRepository: Repository<Pet>;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                PetsService,
                {
                    provide: getRepositoryToken(Pet),
                    useClass: PetRepositoryFake,
                },
            ],
        }).compile();

        petService = app.get<PetsService>(PetsService);
        petRepository = app.get(getRepositoryToken(Pet));
    });

    it('should be defined', () => {
        expect(petService).toBeDefined();
    });

    describe('create()', () => {
        it('should create a new pet', async () => {
            const { savedPet, createdPetEntity, dto } = createPet();
            const userRepositoryCreateSpy = jest
                .spyOn(petRepository, 'create')
                .mockReturnValue(createdPetEntity);

            const userRepositorySaveSpy = jest
                .spyOn(petRepository, 'save')
                .mockResolvedValue(savedPet);

            const result = await petService.create(dto);

            expect.assertions(3);

            expect(userRepositoryCreateSpy).toBeCalledWith(dto);
            expect(userRepositorySaveSpy).toBeCalledWith(createdPetEntity);
            expect(result).toEqual(savedPet);
        });
    });

    describe('finding pets', () => {
        // it('throws an error when a playlist doesnt exist', async () => {
        //     const playlistId = faker.random.uuid();

        //     const playlistRepositoryFindOneSpy = jest
        //         .spyOn(playlistRepository, 'findOne')
        //         .mockResolvedValue(null);

        //     expect.assertions(3);

        //     try {
        //         await playlistService.findOneByIdOrThrow(playlistId);
        //     } catch (e) {
        //         expect(e).toBeInstanceOf(NotFoundException);
        //         expect(e.message).toBe('No playlist found.');
        //     }

        //     expect(playlistRepositoryFindOneSpy).toHaveBeenCalledWith({
        //         id: playlistId,
        //     });
        // });

        // it('should return a list of pets by userId', async () => {
        //     const userId = 'valid_user_id';

        //     const { savedPet } = createPet();
        //     const pets = [savedPet];

        //     const petsRepositoryFindSpy = jest
        //         .spyOn(petRepository, 'find')
        //         .mockResolvedValueOnce(pets);

        //     const result = await petService.findAll(userId);

        //     // expect(result).toBe(pets);
        //     expect(petsRepositoryFindSpy).toHaveBeenCalledWith({
        //         userId,
        //     });
        // });
    });

    function createPet() {
        const file: File = {
            filename: 'test.jpg',
            mimetype: 'image/jpeg',
            encoding: '7bit',
            destination: 'test',
            buffer: Buffer.from('test'),
            fieldname: 'test',
            originalname: 'test',
            size: 4,
            path: 'test',
        };
        const media = new Media();
        media.id = 'media_uuid';
        media.destination = file.destination;
        media.title = file.filename;
        media.originalName = file.originalname;
        media.createdAt = new Date();
        media.updatedAt = new Date();

        const dto: CreatePetDto = {
            name: 'valid_name',
            animal_race: 'valid_animal_race',
            heigth: 'valid_heigth',
            weight: 'valid_password',
            birth_date: new Date(),
            sex: 'valid_sex',
            userId: 'valid_user_id',
            media,
            file,
        };
        const createdPetEntity = Pet.of(dto, Pet);

        const savedPet = Pet.of(
            {
                id: 'uuid',
                createdAt: new Date(),
                updatedAt: new Date(),
                ...dto,
            },
            Pet,
        );

        return { createdPetEntity, savedPet, dto };
    }
});
