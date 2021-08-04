import { Auth } from '@truckify/services-types/auth';
import { createAxiosInstance } from './utils/axiosInstance';

type Param = {
  apiKey: string;
  baseUrl: string;
  serviceName: string;
}

type JwtToken = Auth.Helpers.JwtToken;
type LoginWithEmailAndPassword = Auth.HttpRequest.LoginWithEmailAndPassword;

type Response = {
  ping: () => any;
  loginWithEmailAndPassword: (input: LoginWithEmailAndPassword) => Promise<JwtToken>;
}

export const createAuthService = ({ apiKey, baseUrl, serviceName }: Param): Response => {
  const { get, post } = createAxiosInstance({ apiKey, baseUrl });

  return {
    ping: async () => {
      await get(`/public/${serviceName}/ping`)
    },

    loginWithEmailAndPassword: async (input: LoginWithEmailAndPassword): Promise<JwtToken> => {
      const response = await post(`/internal/${serviceName}/login-email`, input)
      return response.data;
    }
  }
}