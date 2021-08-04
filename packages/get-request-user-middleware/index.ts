import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '@truckify/response-errors';
import { userService } from './userServiceCommunication';
import { User } from '@truckify/services-types/user';

declare global {
  namespace Express {
    interface Request {
      user: User.Model.Complete;
    }
  }
}

export const getRequestUser = async (request: Request, response: Response, next: NextFunction) => {
  const isPublic = request.originalUrl.includes('/public/');
  const isInternal = request.originalUrl.includes('/internal/');

  if (isPublic || isInternal) {
    return next();
  }

  const { id } = request.user!;

  const user = await userService.getUserById({ id });

  if (!user) {
    throw new BadRequestError('Erro ao buscar o usuário referente a essa requisição.');
  }

  request.user = user;

  return next();
}