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
type Create = User.HttpRequest.Create;
type Update = User.HttpRequest.Update;

type Response = {
  ping: () => Promise<any>;
  getUserById: (input: GetUserById) => Promise<Model | undefined>;
  getUserByEmail: (input: GetByEmail) => Promise<Model | undefined>;
  createUser: (input: Create) => Promise<Model>;
  updateUser: (input: Update) => Promise<Model>;
}

export const createUserService = ({ apiKey, mode }: Param): Response => {
  const serviceName = ServicesNames.User;
  const { port } = Service[serviceName];
  const baseUrl = mode === 'D' ? `http://localhost:${port}` : ''; //! ajeitar esse '';

  const { get, post, put } = createAxiosInstance({ apiKey, baseUrl });

  return {
    ping: async () => await get(`/public/${serviceName}/ping`),

    getUserById: async ({ id }: GetUserById): Promise<Model | undefined> => {
      const result = await get(`/internal/${serviceName}/byId/${id}`);
      return result.data;
    },

    getUserByEmail: async ({ email }: GetByEmail): Promise<Model | undefined> => {
      const result = await get(`/internal/${serviceName}/byEmail/${email}`);
      return result.data;
    },

    createUser: async (userData: Create): Promise<Model> => {
      const result = await post(`/internal/${serviceName}`, userData);
      return result.data;
    },

    updateUser: async (userData: Update): Promise<Model> => {
      const result = await put(`/internal/${serviceName}`, userData);
      return result.data;
    }
  }
}