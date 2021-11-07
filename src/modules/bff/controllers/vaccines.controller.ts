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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { CreateDose } from '../../pets/dto/create-pet-vaccines.dto';
import { UpdateDoseDto } from '../../pets/dto/update-dose.dto';
import { VaccineResponseDto } from '../../pets/dto/vaccine-response.dto';
import { DosesService } from '../../pets/services/doses.service';
import { VaccinesService } from '../../pets/services/vaccines.service';

@UseGuards(JwtAuthGuard)
@ApiTags('vaccines')
@Controller('vaccines')
export class VaccinesController {
    constructor(private readonly vaccinesService: VaccinesService) {}

    @Get()
    @ApiOkResponse({ type: [VaccineResponseDto] })
    index(@UserLogged() user: IUserLogged) {
        return this.vaccinesService.findAll();
    }
}
