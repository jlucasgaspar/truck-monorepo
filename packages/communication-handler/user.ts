import { Auth } from '@truckify/services-types/auth';
import { createAxiosInstance, Param, Output } from './utils/axiosInstance';

type LoginWithEmailAndPassword = Auth.HttpRequest.LoginWithEmailAndPassword;

type Response = {
  ping: () => Output<string>;
  getUserById: (input: LoginWithEmailAndPassword) => Output<any>;
}

export const createAuthService = ({ apiKey, baseUrl, serviceName }: Param): Response => {
  const { get, post } = createAxiosInstance({ apiKey, baseUrl, serviceName });

  return {
    ping: async () => await get('/public/ping'),
    getUserById: async (input: LoginWithEmailAndPassword) => await post('/internal/login-email', input)
  }
}