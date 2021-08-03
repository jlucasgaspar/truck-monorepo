import axios, { AxiosResponse } from 'axios'

export type Param = {
  apiKey: string;
  baseUrl: string;
}

export type Output <T> = Promise<AxiosResponse<T>>;

export const createAxiosInstance = ({ apiKey, baseUrl }: Param) => axios.create({
  baseURL: `${baseUrl}/base`,
  headers: {
    'Internal-Api-Key': apiKey
  }
});