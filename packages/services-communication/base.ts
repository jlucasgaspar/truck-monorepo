import { Service, ServicesNames } from '@truckify/services-envs';
import { createAxiosInstance } from './utils/axiosInstance';

type Param = {
  apiKey: string;
  mode: string;
}

type Response = {
  ping: () => Promise<any>;
}

export const createBaseService = ({ apiKey, mode }: Param): Response => {
  const serviceName = ServicesNames.Auth;
  const { port } = Service[serviceName];
  const baseUrl = mode === 'D' ? `http://localhost:${port}` : ''; //! ajeitar esse '';

  const { get } = createAxiosInstance({ apiKey, baseUrl });

  return {
    ping: async () => await get(`/public/${serviceName}/ping`)
  }
}