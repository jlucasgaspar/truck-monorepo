import { createUserService } from '@truckify/services-communication/user';
import { env } from '../config/env';

export const userService = createUserService({
  apiKey: env.internalApiKey,
  mode: env.mode
});