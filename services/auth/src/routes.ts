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
  },

  loginWithEmailAndPassword: {
    path: '/internal/login-email',
    method: 'POST',
    handler: handlers.loginWithEmailAndPasswordController,
    schema: Joi.object<Auth.HttpRequest.LoginWithEmailAndPassword>({
      email: Joi.string().required().email(),
      password: Joi.string().required()
    })
  }
});