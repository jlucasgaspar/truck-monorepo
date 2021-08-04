import { ForbiddenError } from '@truckify/response-errors';
import { Request, Response, NextFunction } from 'express';

export const internalApiKeyHandler = (internalApiKey: string) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const isInternal = request.originalUrl.includes('/internal/');

    if (!isInternal) {
      return next();
    }

    const internalApiKeyFromRequest = request.headers['internal-api-key'];

    if (!internalApiKeyFromRequest) {
      throw new ForbiddenError('Internal Api Key is missing.');
    }
    
    if (internalApiKeyFromRequest !== internalApiKey) {
      throw new ForbiddenError('Invalid Internal Api Key.');
    }

    return next();
  }
} 