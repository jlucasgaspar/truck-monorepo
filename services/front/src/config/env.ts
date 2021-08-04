import dotenv from 'dotenv';
import { getEnv } from '../utils/getEnv';

dotenv.config();

const myEnv = process.env;

export const env = {
  mode: getEnv('MODE', myEnv),
  jwtSecret: getEnv('JWT_SECRET', myEnv),
  internalApiKey: getEnv('INTERNAL_API_KEY', myEnv),
  baseUrl: getEnv('BASE_URL', myEnv)
}