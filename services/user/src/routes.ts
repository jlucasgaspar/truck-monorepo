import Joi from 'joi';
import { createRouter } from '@truckify/router-handler';
import { Base } from '@truckify/services-types/base';
import * as handlers from './controllers';

export const routes = createRouter({
  ping: {
    path: '/public/user/ping',
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  },

  getUserById: {
    path: '/internal/user/:userId',
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  }
});