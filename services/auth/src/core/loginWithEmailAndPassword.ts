import { BadRequestError } from '@truckify/response-errors';
import { generateJwt } from '@truckify/jwt-handler';
import { Auth } from '@truckify/services-types/auth';
import { comparePasswords } from '../infra/encrypter';
import { userService } from '../infra/communication';
import { env } from '../config/env';

type Input = Auth.Core.LoginWithEmailAndPassword;
type Output = Auth.Helpers.JwtToken;

export const loginWithEmailAndPassword = async ({ email, password }: Input): Promise<Output> => {
  const user = await userService.getUserByEmail({ email });
  if (!user) {
    throw new BadRequestError('Email/senha incorreto(s).')
  }

  if (user.provider !== 'email') {
    throw new BadRequestError(`Você não se cadastrou via e-mail. Faça login via ${user.provider}.`);
  }

  const passwordsMatch = await comparePasswords({
    encryptedPassword: user.password!,
    defaultPassword: password
  });

  if (!passwordsMatch) {
    throw new BadRequestError('Senha/e-mail incorreto(s).');
  }

  return generateJwt(user.id, env.jwtSecret);
}