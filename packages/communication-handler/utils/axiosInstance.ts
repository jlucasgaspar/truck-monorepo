import axios, { AxiosResponse } from 'axios'

export type Param = {
  apiKey: string;
  baseUrl: string;
  serviceName: string;
}

export type Output <T> = Promise<AxiosResponse<T>>;

export const createAxiosInstance = ({ apiKey, baseUrl, serviceName }: Param) => axios.create({
  baseURL: `${baseUrl}/${serviceName}`,
  headers: {
    'Internal-Api-Key': apiKey
  }
});