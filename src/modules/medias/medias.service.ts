import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { config } from '../../config/configuration';
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
