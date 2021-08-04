import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '@truckify/response-errors';
import { decodeJwt } from '@truckify/jwt-handler';
import { jwtSecret } from './secret';

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

  const verifiedToken = decodeJwt(jwtToken, jwtSecret);
  if (!verifiedToken) {
    throw new UnauthorizedError('Token inválido');
  }

  const isRefreshTokenUrl = request.originalUrl.includes('/refresh-token');
  const tokenIsExpired = Date.now() > verifiedToken.exp;
  if (!isRefreshTokenUrl && tokenIsExpired) {
    throw new UnauthorizedError('Token expirado');
  }

  return next();
}