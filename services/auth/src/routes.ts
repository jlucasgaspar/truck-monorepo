import Joi from 'joi';
import { createRouter } from '@truckify/router-handler';
import { Auth } from '@truckify/services-types/auth';
import * as handlers from './controllers';

export const routes = createRouter({
  ping: {
    path: '/public/ping',
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  }
});