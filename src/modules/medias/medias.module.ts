import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudStorageService } from './cloud-storage-service.service';
import { MediaRepository } from './medias.repository';
import { MediaService } from './medias.service';

@Module({
    imports: [TypeOrmModule.forFeature([MediaRepository])],
    providers: [MediaService, CloudStorageService],
    exports: [MediaService],
})
export class MediaModule {}
