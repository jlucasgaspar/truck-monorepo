import { User } from '@truckify/services-types/user';
import { Http } from '@truckify/shared-types';
import { createUser } from '../core';

type Input = Http.Request<User.HttpRequest.Create>;
type Output = Http.Response;

export const createUserController = async (request: Input, response: Output): Promise<Output> => {
  const { email, name, provider, companyId, password, phoneNumber, photoUrl, providerId } = request.body;
  const user = await createUser({ email, name, provider, companyId, password, phoneNumber, photoUrl, providerId });
  return response.status(200).json(user);
}