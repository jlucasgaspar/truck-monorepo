import { config } from 'dotenv';
import { createUserService } from '@truckify/communication-handler/user';
import { ServicesNames } from '@truckify/services-envs';

config();

export const userService = createUserService({
  apiKey: process.env.API_KEY as string,
  baseUrl: process.env.BASE_URL as string,
  serviceName: ServicesNames.User
})