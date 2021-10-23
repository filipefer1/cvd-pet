import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT_CONSTANTS: {
        secret: process.env.JWT_SECRET || 'secretKey',
        expireIn: '1d',
    },
    GCS: {
        CGS_PROJECT_ID: process.env.CGS_PROJECT_ID,
        GCS_BUCKET: process.env.GCS_BUCKET,
        GCS_KEY_FILENAME: process.env.GCS_KEY_FILENAME,
    },
};
