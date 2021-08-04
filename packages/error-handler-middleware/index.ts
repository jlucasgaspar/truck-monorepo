import { ErrorRequestHandler } from 'express';
import { isCelebrateError } from 'celebrate';

export const errorHandler: ErrorRequestHandler = (err, request, response, next) => {
  if (isCelebrateError(err)) {
    const errors = [];
    for (const [, joiError] of err.details.entries()) {
      for (const { message } of joiError.details) { errors.push(message); }
    }
    return response.status(422).json({ errors });
  }

  if (err.isAppError) {
    return response.status(err.statusCode).json({ errors: [err.message] });
  }

  console.log(err);
  return response.status(500).json({ errors: ['Intenal Server Error'] });
}