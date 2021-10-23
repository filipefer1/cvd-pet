import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT_CONSTANTS: {
        secret: process.env.JWT_SECRET || 'secretKey',
        expireIn: '1d',
    },
    AWS: {
        AWS_PUBLIC_BUCKET_NAME: process.env.AWS_PUBLIC_BUCKET_NAME,
        AWS_REGION: process.env.AWS_REGION,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    },
};
