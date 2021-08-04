import { Joi } from 'celebrate';
import { createRouter } from '@truckify/router-handler';
import { Auth } from '@truckify/services-types/auth';
import { serviceName } from './utils/serviceInfo';
import * as handlers from './controllers';

export const routes = createRouter({
  ping: {
    path: `/public/${serviceName}/ping`,
    method: 'GET',
    handler: handlers.pingController,
    schema: Joi.object<void>()
  },

  loginWithEmailAndPassword: {
    path: '/public/auth/login-email',
    method: 'POST',
    handler: handlers.pingController,
    schema: Joi.object<Auth.HttpRequest.LoginWithEmailAndPassword>({
      email: Joi.string().required().email(),
      password: Joi.string().required()
    })
  }
});