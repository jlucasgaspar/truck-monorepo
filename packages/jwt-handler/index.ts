import { sign, verify } from 'jsonwebtoken';
import { Auth } from '@truckify/services-types/auth';

export const generateJwt = (userId: string, secret: string): Auth.Helpers.JwtToken => {
  const twoDays = 1000 * 60 * 60 * 24 * 2;
  const exp = Date.now() + twoDays;

  const token = sign({ sub: userId, exp }, secret);
  return { token, exp }
}

export const decodeJwt = (jwtToken: string, secret: string): Auth.Helpers.DecodedJwtToken => {
  const { sub, exp } = verify(jwtToken, secret) as Auth.Helpers.DecodedJwtToken;
  return { exp, sub }
}