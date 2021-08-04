import { Auth } from '@truckify/services-types/auth';
import { Http } from '@truckify/shared-types';
import { signUpWithEmailAndPassword } from '../core';

type Input = Http.Request<Auth.HttpRequest.SignUpWithEmailAndPassword>;
type Output = Http.Response;

export const signUpWithEmailAndPasswordController = async (request: Input, response: Output): Promise<Output> => {
  const { email, password, name } = request.body;

  const jwtToken = await signUpWithEmailAndPassword({ email, password, name });

  return response.status(200).json(jwtToken);
}