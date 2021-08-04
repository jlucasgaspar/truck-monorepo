import { createAuthService } from '@truckify/services-communication/auth';
import { env } from '../config/env';

const { internalApiKey: apiKey, mode } = env;

export const authService = createAuthService({ apiKey, mode });