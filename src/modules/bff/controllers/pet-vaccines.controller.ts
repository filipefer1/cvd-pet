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
import { CreatePetVaccinesDto } from '../../pets/dto/create-pet-vaccines.dto';
import { PetVaccinesService } from '../../pets/services/pet-vaccines.service';

@UseGuards(JwtAuthGuard)
@Controller('pet-vaccines')
export class PetVaccinesController {
    constructor(private readonly petVaccinesService: PetVaccinesService) {}

    @Post() //mover para controller do veterinario
    create(
        @UserLogged() user: IUserLogged,
        @Body(ValidationPipe) dto: CreatePetVaccinesDto,
    ) {
        return this.petVaccinesService.create(dto, user.userId);
    }

    @Get(':petId')
    findAll(@UserLogged() user: IUserLogged, @Param('petId') petId: string) {
        return this.petVaccinesService.findAll(petId);
    }

    // @Get(':id')
    // findOne(@Param('id') petId: string, @UserLogged() user: IUserLogged) {
    //     return this.petsService.findOne(petId, user.userId);
    // }

    // @Patch(':id')
    // update(
    //     @Param('id') id: string,
    //     @Body() updatePetDto: UpdatePetDto,
    //     @UserLogged() user: IUserLogged,
    // ) {
    //     return this.petsService.update(id, user.userId, updatePetDto);
    // }

    // @Delete(':id')
    // @HttpCode(204)
    // remove(@Param('id') id: string, @UserLogged() user: IUserLogged) {
    //     return this.petsService.remove(id, user.userId);
    // }
}
