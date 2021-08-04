import { User } from '@truckify/services-types/user';
import * as usersRepository from '../infra/repository';

type Input = User.Core.GetByEmail;
type Output = User.Model.Complete | undefined;

export const getUserByEmail = async ({ email }: Input): Promise<Output> => {
  return await usersRepository.findUserByEmail(email);
}