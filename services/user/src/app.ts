import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { internalApiKeyHandler } from '@truckify/internal-api-key-middleware';
import { getRequestUser } from '@truckify/get-request-user-middleware';
import { errorHandler } from '@truckify/error-handler-middleware';
import { jwtDecoder } from '@truckify/jwt-middleware';
import { serviceName, servicePort } from './utils/serviceInfo';
import { routes } from './routes';

export const initApp = () => {
  const app = express();

  app.use(express.json(), cors());

  app.use(
    internalApiKeyHandler,
    jwtDecoder,
    getRequestUser,
    routes,
    errorHandler
  );

  app.listen(servicePort, () => {
    console.log(`Listening service ${serviceName.toUpperCase()} on http://localhost:${servicePort}`);
  });
}