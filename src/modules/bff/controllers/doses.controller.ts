import {
    Controller,
    Post,
    Body,
    UseGuards,
    ValidationPipe,
    Patch,
    Param,
    Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { CreateDose } from '../../pets/dto/create-pet-vaccines.dto';
import { UpdateDoseDto } from '../../pets/dto/update-dose.dto';
import { DosesService } from '../../pets/services/doses.service';

@UseGuards(JwtAuthGuard)
@Controller('doses')
@ApiTags('doses')
export class DosesController {
    constructor(private readonly dosesService: DosesService) {}

    @Post()
    create(
        @UserLogged() user: IUserLogged,
        @Body(ValidationPipe) dto: CreateDose,
    ) {
        return this.dosesService.create(dto);
    }

    @Get(':petVaccinesId')
    index(@Param('petVaccinesId') petVaccinesId: string) {
        return this.dosesService.findAll(petVaccinesId);
    }

    @Patch(':doseId')
    update(
        @Param('doseId') doseId: string,

        @Body(ValidationPipe) dto: UpdateDoseDto,
    ) {
        return this.dosesService.update(doseId, dto);
    }
}
