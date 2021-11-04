import {
    Controller,
    Post,
    UseGuards,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from '../../../shared/interfaces/file.interface';
import { UserLogged } from '../../auth/decorators/user-logged.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { IUserLogged } from '../../auth/interfaces/user-logged';
import { MediaService } from '../../medias/medias.service';

@UseGuards(JwtAuthGuard)
@Controller('medias')
export class MediasController {
    constructor(private readonly mediasService: MediaService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@UserLogged() user: IUserLogged, @UploadedFile() file: File) {
        return this.mediasService.create(file);
    }

    // @Delete(':id')
    // delete(@Param('id') key: string) {
    //     return this.mediasService.deletePublicFile(key);
    // }
}
