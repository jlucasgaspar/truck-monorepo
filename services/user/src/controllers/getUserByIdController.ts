import { Http } from '@truckify/shared-types';
import { getUserById } from '../core';

type Input = Http.Request<void>;
type Output = Http.Response;

export const getUserByIdController = async (request: Input, response: Output): Promise<Output> => {
  const { userId } = request.params;
  const user = await getUserById({ id: userId });
  return response.status(200).json(user);
}