import { Injectable } from '@nestjs/common';
import { File } from '../../shared/interfaces/file.interface';
import { CloudStorageService } from './cloud-storage-service.service';
import { MediaRepository } from './medias.repository';

@Injectable()
export class MediaService {
    constructor(
        private readonly mediaRepository: MediaRepository,
        private readonly cloudStorageService: CloudStorageService,
    ) {}

    async create(file: File) {
        const image = await this.cloudStorageService.uploadFile(file, '');

        const media = this.mediaRepository.create({
            destination: image.publicUrl,
            originalName: file.originalname,
            key: image.name,
            title: image.name,
        });

        return this.mediaRepository.save(media);
    }
}
