import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { internalApiKeyHandler } from '@truckify/internal-api-key-handler';
import { errorHandler } from '@truckify/error-handler';
import { serviceName, servicePort } from './utils/serviceInfo';
import { routes } from './routes';

export const initApp = () => {
  const basePath = `/${serviceName}`;

  const app = express();

  app.use(express.json(), cors());

  app.use(
    basePath,
    internalApiKeyHandler,
    routes,
    errorHandler
  );

  app.listen(servicePort, () => {
    console.log(`Listening service ${serviceName.toUpperCase()} on http://localhost:${servicePort}`);
  });
}