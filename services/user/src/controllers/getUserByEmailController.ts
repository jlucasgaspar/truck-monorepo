import { Http } from '@truckify/shared-types';
import { getUserByEmail } from '../core';

type Input = Http.Request<void>;
type Output = Http.Response;

export const getUserByEmailController = async (request: Input, response: Output): Promise<Output> => {
  const { email } = request.params;
  const user = await getUserByEmail({ email });
  return response.status(200).json(user);
}