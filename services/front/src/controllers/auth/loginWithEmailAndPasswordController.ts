import { Http } from '@truckify/shared-types';
import { Auth } from '@truckify/services-types/auth';
import { authService } from '../../infra/communication';

type Input = Http.Request<Auth.HttpRequest.LoginWithEmailAndPassword>;
type Output = Http.Response;

export const loginWithEmailAndPasswordController = async (request: Input, response: Output): Promise<Output> => {
  const { email, password } = request.body;
  const jwtToken = await authService.loginWithEmailAndPassword({ email, password });
  return response.status(200).json(jwtToken);
}