import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT_CONSTANTS: {
        secret: process.env.JWT_SECRET || 'secretKey',
        expireIn: '1d',
    },
};
