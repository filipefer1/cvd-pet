import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUserLogged } from '../interfaces/user-logged';

export const UserLogged = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): IUserLogged => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);
