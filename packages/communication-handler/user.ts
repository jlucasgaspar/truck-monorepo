import { User } from '@truckify/services-types/user';
import { createAxiosInstance } from './utils/axiosInstance';

type Param = {
  apiKey: string;
  baseUrl: string;
  serviceName: string;
}

type Model = User.Model.Complete;
type GetUserById = User.HttpRequest.GetById;

type Response = {
  ping: () => Promise<any>;
  getUserById: (input: GetUserById) => Promise<Model | undefined>;
}

export const createUserService = ({ apiKey, baseUrl, serviceName }: Param): Response => {
  const { get } = createAxiosInstance({ apiKey, baseUrl });

  return {
    ping: async () => await get(`/public/${serviceName}/ping`),

    getUserById: async ({ id }: GetUserById): Promise<Model | undefined> => {
      const result = await get(`/internal/${serviceName}/${id}`)
      return result.data;
    }
  }
}