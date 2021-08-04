import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { internalApiKeyHandler } from '@truckify/internal-api-key-middleware';
import { getRequestUser } from '@truckify/get-request-user-middleware';
import { errorHandler } from '@truckify/error-handler-middleware';
import { jwtDecoder } from '@truckify/jwt-middleware';
import { env } from './config/env';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use(internalApiKeyHandler(env.internalApiKey));

app.use(jwtDecoder(env.jwtSecret));

app.use(getRequestUser);

app.use(routes);

app.use(errorHandler);

export { app }