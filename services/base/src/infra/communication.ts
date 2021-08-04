import { createBaseService } from '@truckify/services-communication/base';
import { env } from '../config/env';

const { internalApiKey: apiKey, mode } = env;

export const authService = createBaseService({ apiKey, mode });