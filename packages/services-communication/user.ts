import { Service, ServicesNames } from '@truckify/services-envs';
import { User } from '@truckify/services-types/user';
import { createAxiosInstance } from './utils/axiosInstance';

type Param = {
  apiKey: string;
  mode: string;
}

type Model = User.Model.Complete;
type GetUserById = User.HttpRequest.GetById;
type GetByEmail = User.HttpRequest.GetByEmail;

type Response = {
  ping: () => Promise<any>;
  getUserById: (input: GetUserById) => Promise<Model | undefined>;
  getUserByEmail: (input: GetByEmail) => Promise<Model | undefined>;
}

export const createUserService = ({ apiKey, mode }: Param): Response => {
  const serviceName = ServicesNames.User;
  const { port } = Service[serviceName];
  const baseUrl = mode === 'D' ? `http://localhost:${port}` : ''; //! ajeitar esse '';

  const { get } = createAxiosInstance({ apiKey, baseUrl });

  return {
    ping: async () => await get(`/public/${serviceName}/ping`),

    getUserById: async ({ id }: GetUserById): Promise<Model | undefined> => {
      const result = await get(`/internal/${serviceName}/byId/${id}`)
      return result.data;
    },

    getUserByEmail: async ({ email }: GetByEmail): Promise<Model | undefined> => {
      const result = await get(`/internal/${serviceName}/byEmail/${email}`)
      return result.data;
    }
  }
}