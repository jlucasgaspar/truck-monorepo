export class BaseError {
  constructor(
    public message: string,
    public statusCode: number,
    public type: string,
    public isAppError: boolean
  ) {}
}