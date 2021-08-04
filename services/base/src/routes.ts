import Joi from 'joi';
import { createRouter } from '@truckify/router-handler';
import { Base } from '@truckify/services-types/base';
import { serviceName } from './utils/serviceInfo';
import * as handlers from './controllers';

export const routes = createRouter({
  ping: {
    path: `/public/${serviceName}/ping`,
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  }
});