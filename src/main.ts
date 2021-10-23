import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'aws-sdk';
import { config as envConfig } from './config/configuration';
import { Storage } from '@google-cloud/storage';
import * as path from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const port = process.env.PORT || 3333;
    await app.listen(port, () => console.log(`app listening on port ${port}`));
}
bootstrap();
