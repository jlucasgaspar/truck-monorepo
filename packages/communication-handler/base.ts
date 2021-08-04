import { createAxiosInstance, Param, Output } from './utils/axiosInstance';

type Response = {
  ping: () => Output<string>;
}

export const createBaseService = ({ apiKey, baseUrl, serviceName }: Param): Response => {
  const api = createAxiosInstance({ apiKey, baseUrl, serviceName });

  return {
    ping: async () => await api.get('/ping')
  }
}