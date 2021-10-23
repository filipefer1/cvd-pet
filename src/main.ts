import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'aws-sdk';
import { config as envConfig } from './config/configuration';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    config.update({
        accessKeyId: envConfig.AWS.AWS_ACCESS_KEY_ID,
        secretAccessKey: envConfig.AWS.AWS_SECRET_ACCESS_KEY,
        region: envConfig.AWS.AWS_REGION,
    });
    const port = process.env.PORT || 3333;
    await app.listen(port, () => console.log(`app listening on port ${port}`));
}
bootstrap();
