import axios from 'axios'

type Param = {
  apiKey: string;
  baseUrl: string;
}

export const createAxiosInstance = ({ apiKey, baseUrl }: Param) => axios.create({
  baseURL: baseUrl,
  headers: {
    'Internal-Api-Key': apiKey
  }
});