import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PetsModule } from '../pets/pets.module';
import { UserModule } from '../users/user.module';
import { PetVaccinesController } from './controllers/pet-vaccines.controller';
import { PetsController } from './controllers/pets.controller';
import { UserController } from './controllers/user.controller';

@Module({
    imports: [UserModule, AuthModule, PetsModule],
    controllers: [UserController, PetsController, PetVaccinesController],
})
export class BffModule {}
