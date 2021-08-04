import { config } from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '@truckify/response-errors';
import { decodeJwt } from '@truckify/jwt-handler';
import { User } from '@truckify/services-types/user';

config();

if (!process.env.JWT_SECRET) throw new Error('No process.env.JWT_SECRET found');

declare global {
  namespace Express {
    interface Request {
      user: User.Model.Complete;
    }
  }
}

export const jwtDecoder = (request: Request, response: Response, next: NextFunction) => {
  const isPublic = request.originalUrl.includes('/public/');
  const isInternal = request.originalUrl.includes('/internal/');

  if (isPublic || isInternal) {
    return next();
  }

  const { authorization } = request.headers;
  if (!authorization) {
    throw new UnauthorizedError('Não há token na requisição.');
  }

  const jwtToken = authorization.replace('Bearer', '').trim();

  const verifiedToken = decodeJwt(jwtToken, process.env.JWT_SECRET as string);
  if (!verifiedToken) {
    throw new UnauthorizedError('Token inválido');
  }

  const isRefreshTokenUrl = request.originalUrl.includes('/refresh-token');
  const tokenIsExpired = Date.now() > verifiedToken.exp;
  if (!isRefreshTokenUrl && tokenIsExpired) {
    throw new UnauthorizedError('Token expirado');
  }

  request.user = verifiedToken.sub as User.Model.Complete;

  return next();
}