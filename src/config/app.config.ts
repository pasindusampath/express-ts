import dotenv from 'dotenv';

dotenv.config();
export const APP_CONFIG = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
    DB_URL: process.env.DB_HOST || 'localhost',
    PASSWORD : process.env.PASSWORD,
}