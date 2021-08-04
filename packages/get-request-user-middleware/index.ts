import { Request, Response, NextFunction } from 'express';
// import { findUserById } from '@user/services/repository';
import { BadRequestError } from '@truckify/response-errors';

export const getRequestUser = async (request: Request, response: Response, next: NextFunction) => {
  const isPublic = request.originalUrl.includes('/public/');
  const isInternal = request.originalUrl.includes('/internal/');

  if (isPublic || isInternal) {
    return next();
  }

  // const { id } = request.user!;

  // const user = await findUserById(id);
  // if (!user) {
  //   throw new BadRequestError('Erro ao buscar o usuário referente a essa requisição.');
  // }

  // request.user = user;

  return next();
}