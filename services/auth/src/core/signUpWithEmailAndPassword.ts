import { BadRequestError } from '@truckify/response-errors';
import { generateJwt } from '@truckify/jwt-handler';
import { Auth } from '@truckify/services-types/auth';
import { encryptPassword } from '../infra/encrypter';
import { userService } from '../infra/communication';
import { env } from '../config/env';

type Input = Auth.Core.SignUpWithEmailAndPassword;
type Output = Auth.Helpers.JwtToken | any //! remove any;

export const signUpWithEmailAndPassword = async ({ email, password, name }: Input): Promise<Output> => {
  // const accountAlreadyExists = await findUserByEmail(email);
  // if (accountAlreadyExists) {
  //   throw new BadRequestError('Email já está em uso.');
  // }

  const hashedPassword = await encryptPassword(password);

  // const { id } = await insertUser({ email, password: hashedPassword, provider: 'email', name });

  // return generateJwt(id, env.jwtSecret);
}