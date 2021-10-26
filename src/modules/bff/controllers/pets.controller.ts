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
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { CreatePetDto } from '../../pets/dto/create-pet.dto';
import { PetResponse } from '../../pets/dto/pet-response';
import { UpdatePetDto } from '../../pets/dto/update-pet.dto';
import { PetsService } from '../../pets/services/pets.service';

@ApiTags('pets')
@UseGuards(JwtAuthGuard)
@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Post()
    @ApiBody({ type: CreatePetDto })
    @ApiOkResponse({ type: PetResponse })
    create(
        @UserLogged() user: IUserLogged,
        @Body(ValidationPipe) createPetDto: CreatePetDto,
    ) {
        return this.petsService.create({
            ...createPetDto,
            userId: user.userId,
        });
    }

    @ApiOkResponse({ type: [PetResponse] })
    @Get()
    findAll(@UserLogged() user: IUserLogged) {
        return this.petsService.findAll(user.userId);
    }

    @Get(':id')
    @ApiOkResponse({ type: PetResponse })
    findOne(@Param('id') petId: string, @UserLogged() user: IUserLogged) {
        return this.petsService.findOne(petId, user.userId);
    }

    @Patch(':id')
    @ApiBody({ type: UpdatePetDto })
    @ApiOkResponse({ type: PetResponse })
    update(
        @Param('id') id: string,
        @Body() updatePetDto: UpdatePetDto,
        @UserLogged() user: IUserLogged,
    ) {
        return this.petsService.update(id, user.userId, updatePetDto);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string, @UserLogged() user: IUserLogged) {
        return this.petsService.remove(id, user.userId);
    }
}
