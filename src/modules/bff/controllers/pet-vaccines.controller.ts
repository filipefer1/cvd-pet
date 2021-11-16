import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { CreatePetVaccinesDto } from '../../pets/dto/create-pet-vaccines.dto';
import {
    PetVaccinesDetailsResponseDto,
    PetVaccinesResponseDto,
} from '../../pets/dto/pet-vaccines-response';
import { PetVaccinesService } from '../../pets/services/pet-vaccines.service';

@UseGuards(JwtAuthGuard)
@Controller('pet-vaccines')
@ApiTags('pet-vaccines')
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
    @ApiOkResponse({ type: [PetVaccinesResponseDto] })
    findAll(@UserLogged() user: IUserLogged, @Param('petId') petId: string) {
        return this.petVaccinesService.findAll(petId);
    }

    @Get(':petVaccineId/details')
    @ApiOkResponse({ type: PetVaccinesDetailsResponseDto })
    findOne(
        @Param('petVaccineId') petVaccineId: string,
        @UserLogged() user: IUserLogged,
    ) {
        return this.petVaccinesService.findOne(petVaccineId, user.userId);
    }

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
