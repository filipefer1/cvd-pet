import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    ValidationPipe,
    HttpCode,
    UploadedFile,
    BadRequestException,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { File } from '../../../shared/interfaces/file.interface';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { MediaService } from '../../medias/medias.service';
import { CreatePetDto } from '../../pets/dto/create-pet.dto';
import { PetResponse } from '../../pets/dto/pet-response';
import { UpdatePetDto } from '../../pets/dto/update-pet.dto';
import { Pet } from '../../pets/entities/pet.entity';
import { PetsService } from '../../pets/services/pets.service';

@ApiTags('pets')
@UseGuards(JwtAuthGuard)
@Controller('pets')
export class PetsController {
    constructor(
        private readonly petsService: PetsService,
        private readonly mediaService: MediaService,
    ) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: CreatePetDto })
    @ApiOkResponse({ type: PetResponse })
    async create(
        @UserLogged() user: IUserLogged,
        @Body(ValidationPipe) createPetDto: CreatePetDto,
        @UploadedFile() file: File,
    ) {
        if (!file) {
            throw new BadRequestException('Uma imagem precisa ser enviada');
        }

        const media = await this.mediaService.create(file);
        return this.petsService.create({
            ...createPetDto,
            userId: user.userId,
            media,
        });
    }

    @ApiOkResponse({ type: [PetResponse] })
    @Get()
    findAll(@UserLogged() user: IUserLogged) {
        return this.petsService.findAll(user.userId);
    }

    @Get(':id')
    @ApiOkResponse({ type: PetResponse })
    async findOne(@Param('id') petId: string, @UserLogged() user: IUserLogged) {
        const pet = await this.petsService.findOne(petId, user.userId);
        return this.formatPet(pet);
    }

    @Patch(':id')
    @ApiBody({ type: UpdatePetDto })
    @ApiOkResponse({ type: PetResponse })
    async update(
        @Param('id') id: string,
        @Body() updatePetDto: UpdatePetDto,
        @UserLogged() user: IUserLogged,
    ) {
        const pet = await this.petsService.update(
            id,
            user.userId,
            updatePetDto,
        );
        return this.formatPet(pet);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string, @UserLogged() user: IUserLogged) {
        return this.petsService.remove(id, user.userId);
    }

    private formatPet(pet: Pet) {
        return {
            id: pet.id,
            name: pet.name,
            animal_race: pet.animal_race,
            weight: pet.weight,
            height: pet.heigth,
            birth_date: pet.birth_date,
            sex: pet.sex,
        };
    }
}
