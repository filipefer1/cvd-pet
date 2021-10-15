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
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { CreatePetDto } from '../../pets/dto/create-pet.dto';
import { UpdatePetDto } from '../../pets/dto/update-pet.dto';
import { PetsService } from '../../pets/services/pets.service';

@UseGuards(JwtAuthGuard)
@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Post()
    create(
        @UserLogged() user: IUserLogged,
        @Body(ValidationPipe) createPetDto: CreatePetDto,
    ) {
        return this.petsService.create({
            ...createPetDto,
            userId: user.userId,
        });
    }

    @Get()
    findAll(@UserLogged() user: IUserLogged) {
        return this.petsService.findAll(user.userId);
    }

    @Get(':id')
    findOne(@Param('id') petId: string, @UserLogged() user: IUserLogged) {
        return this.petsService.findOne(petId, user.userId);
    }

    @Patch(':id')
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
