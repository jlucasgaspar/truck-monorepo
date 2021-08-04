import { User } from '@truckify/services-types/user';
import * as usersRepository from '../infra/repository';

type Input = User.Core.GetById;
type Output = User.Model.Complete | undefined;

export const getUserById = async ({ id }: Input): Promise<Output> => {
  return await usersRepository.findUserById(id);
}