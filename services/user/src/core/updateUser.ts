import { User } from '@truckify/services-types/user';
import * as usersRepository from '../infra/repository';

type Input = User.Core.Update;
type Output = User.Model.Complete;

export const updateUser = async (userData: Input): Promise<Output> => {
  return await usersRepository.updateUser(userData);
}