import { Http } from '@truckify/shared-types';
import { ping } from '../core';

type Input = Http.Request<void>;
type Output = Http.Response;

export const pingController = async (request: Input, response: Output): Promise<Output> => {
  const { body } = request;
  const pong = await ping(body);
  return response.status(200).json(pong);
}