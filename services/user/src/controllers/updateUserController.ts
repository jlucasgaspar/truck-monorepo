import { User } from '@truckify/services-types/user';
import { Http } from '@truckify/shared-types';
import { updateUser } from '../core';

type Input = Http.Request<User.HttpRequest.Update>;
type Output = Http.Response;

export const updateUserController = async (request: Input, response: Output): Promise<Output> => {
  const { email, name, provider, companyId, password, phoneNumber, photoUrl, providerId, id } = request.body;
  const user = await updateUser({ email, name, provider, companyId, password, phoneNumber, photoUrl, providerId, id });
  return response.status(200).json(user);
}