import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MediaModule } from '../medias/medias.module';
import { PetsModule } from '../pets/pets.module';
import { UserModule } from '../users/user.module';
import { DosesController } from './controllers/doses.controller';
import { MediasController } from './controllers/medias.controller';
import { PetVaccinesController } from './controllers/pet-vaccines.controller';
import { PetsController } from './controllers/pets.controller';
import { UserController } from './controllers/user.controller';

@Module({
    imports: [UserModule, AuthModule, PetsModule, MediaModule],
    controllers: [
        UserController,
        PetsController,
        PetVaccinesController,
        MediasController,
        DosesController,
    ],
})
export class BffModule {}
