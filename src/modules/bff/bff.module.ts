import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../users/user.module';
import { UserController } from './controllers/user.controller';

@Module({
    imports: [UserModule, AuthModule],
    controllers: [UserController],
})
export class BffModule {}
