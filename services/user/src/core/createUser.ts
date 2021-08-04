import { User } from '@truckify/services-types/user';
import * as usersRepository from '../infra/repository';

type Input = User.Core.Create;
type Output = User.Model.Complete;

export const createUser = async (userData: Input): Promise<Output> => {
  return await usersRepository.insertUser(userData);
}