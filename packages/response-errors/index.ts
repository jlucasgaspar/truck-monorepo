import { BaseError } from './BaseError';

export class BadRequestError implements BaseError {
  constructor(
    public message: string,
    public statusCode: number = 400,
    public type: string = 'BadRequest Error',
    public isAppError: boolean = true
  ) {}
}

export class UnauthorizedError implements BaseError {
  constructor(
    public message: string,
    public statusCode: number = 401,
    public type: string = 'Unauthorized Error',
    public isAppError: boolean = true
  ) {}
}

export class ForbiddenError implements BaseError {
  constructor(
    public message: string,
    public statusCode: number = 403,
    public type: string = 'Forbidden Error',
    public isAppError: boolean = true
  ) {}
}