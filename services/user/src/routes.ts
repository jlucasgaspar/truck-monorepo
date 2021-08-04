import { Joi } from 'celebrate';
import { createRouter } from '@truckify/router-handler';
import { User } from '@truckify/services-types/user';
import { serviceName } from './utils/serviceInfo';
import * as handlers from './controllers';

export const routes = createRouter({
  ping: {
    path: `/public/${serviceName}/ping`,
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  },

  getUserById: {
    path: `/internal/${serviceName}/byId/:userId`,
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  }
});