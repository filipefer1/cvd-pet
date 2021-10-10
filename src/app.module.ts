import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { BffModule } from './modules/bff/bff.module';
import { PetsModule } from './modules/pets/pets.module';

@Module({
    imports: [TypeOrmModule.forRoot(), BffModule, AuthModule, PetsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
