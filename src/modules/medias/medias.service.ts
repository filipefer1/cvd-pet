import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { config } from '../../config/configuration';

import { MediaRepository } from './medias.repository';

@Injectable()
export class MediaService {
    constructor(private readonly mediaRepository: MediaRepository) {}

    async create(dataBuffer: Buffer, filename: string) {
        const s3 = new S3();
        const key = `${uuid()}-${filename}`;
        const uploadResult = await s3
            .upload({
                Bucket: config.AWS.AWS_PUBLIC_BUCKET_NAME,
                Body: dataBuffer,
                Key: key,
            })
            .promise();

        const media = this.mediaRepository.create({
            destination: uploadResult.Location,
            originalName: filename,
            key,
            title: key,
        });

        return this.mediaRepository.save(media);
    }

    async deletePublicFile(key: string) {
        const s3 = new S3();
        await s3
            .deleteObject({
                Bucket: config.AWS.AWS_PUBLIC_BUCKET_NAME,
                Key: key,
            })
            .promise();
    }
}
