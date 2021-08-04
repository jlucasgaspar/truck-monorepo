import { BadRequestError } from '@truckify/response-errors';
import { generateJwt } from '@truckify/jwt-handler';
import { Auth } from '@truckify/services-types/auth';
import { encryptPassword } from '../infra/encrypter';
import { userService } from '../infra/communication';
import { env } from '../config/env';

type Input = Auth.Core.SignUpWithEmailAndPassword;
type Output = Auth.Helpers.JwtToken;

export const signUpWithEmailAndPassword = async ({ email, password, name }: Input): Promise<Output> => {
  const accountAlreadyExists = await userService.getUserByEmail({ email });
  if (accountAlreadyExists) {
    throw new BadRequestError('Email já está em uso.');
  }

  const hashedPassword = await encryptPassword(password);

  const { id } = await userService.createUser({ email, password: hashedPassword, provider: 'email', name });

  return generateJwt(id, env.jwtSecret);
}