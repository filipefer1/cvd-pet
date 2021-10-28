import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureGoogleApplication } from './config/google-cloud-config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    configureGoogleApplication();
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle('CVD-PETS')
        .setDescription('The pets API description')
        .setVersion('1.0')
        .addTag('pets')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const port = process.env.PORT || 3333;
    await app.listen(port, () => console.log(`app listening on port ${port}`));
}
bootstrap();
