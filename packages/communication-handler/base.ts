import { createAxiosInstance } from './utils/axiosInstance';

type Param = {
  apiKey: string;
  baseUrl: string;
  serviceName: string;
}

type Response = {
  ping: () => Promise<any>;
}

export const createBaseService = ({ apiKey, baseUrl, serviceName }: Param): Response => {
  const api = createAxiosInstance({ apiKey, baseUrl });

  return {
    ping: async () => await api.get(`/public/${serviceName}/ping`)
  }
}