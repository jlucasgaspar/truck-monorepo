import { createUserService } from '@truckify/services-communication/user';

const { MODE, D_API_KEY, P_API_KEY } = process.env;

export const userService = createUserService({
  apiKey: MODE === 'D' ? D_API_KEY! : P_API_KEY!,
  mode: MODE!
})