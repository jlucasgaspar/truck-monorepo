import { Service, ServicesNames } from '@truckify/services-envs';
import { Auth } from '@truckify/services-types/auth';
import { createAxiosInstance } from './utils/axiosInstance';

type Param = {
  apiKey: string;
  mode: string
}

type JwtToken = Auth.Helpers.JwtToken;
type LoginWithEmailAndPassword = Auth.HttpRequest.LoginWithEmailAndPassword;

type Response = {
  ping: () => any;
  loginWithEmailAndPassword: (input: LoginWithEmailAndPassword) => Promise<JwtToken>;
}

export const createAuthService = ({ apiKey, mode }: Param): Response => {
  const serviceName = ServicesNames.Auth;
  const { port } = Service[serviceName];
  const baseUrl = mode === 'D' ? `http://localhost:${port}` : ''; //! ajeitar esse '';

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