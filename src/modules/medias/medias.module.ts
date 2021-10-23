import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaRepository } from './medias.repository';
import { MediaService } from './medias.service';

@Module({
    imports: [TypeOrmModule.forFeature([MediaRepository])],
    providers: [MediaService],
    exports: [MediaService],
})
export class MediaModule {}
