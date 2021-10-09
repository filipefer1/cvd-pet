import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload';
import { IUserLogged } from '../interfaces/user-logged';
import { config } from '../../../config/configuration';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.JWT_CONSTANTS.secret,
        });
    }

    async validate(payload: JwtPayload): Promise<IUserLogged> {
        return {
            userId: payload.sub,
        };
    }
}
