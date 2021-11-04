import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { CreateDose } from '../../pets/dto/create-pet-vaccines.dto';
import { DosesService } from '../../pets/services/doses.service';

@UseGuards(JwtAuthGuard)
@Controller('doses')
export class DosesController {
    constructor(private readonly dosesService: DosesService) {}

    @Post()
    create(
        @UserLogged() user: IUserLogged,
        @Body(ValidationPipe) dto: CreateDose,
    ) {
        return this.dosesService.create(dto);
    }
}
