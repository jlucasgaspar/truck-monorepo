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
    path: `/internal/${serviceName}/byId/:id`,
    method: 'GET',
    handler: handlers.getUserByIdController,
    schema: Joi.object<void>()
  },

  getUserByEmail: {
    path: `/internal/${serviceName}/byEmail/:email`,
    method: 'GET',
    handler: handlers.getUserByEmailController,
    schema: Joi.object<void>()
  },

  createUser: {
    path: `/internal/${serviceName}`,
    method: 'POST',
    handler: handlers.createUserController,
    schema: Joi.object<User.HttpRequest.Create>({
      companyId: Joi.string().optional().uuid({ version: 'uuidv4' }),
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().optional(),
      provider: Joi.string().required().valid('google', 'email'),
      providerId: Joi.string().optional(),
      photoUrl: Joi.string().optional(),
      phoneNumber: Joi.string().optional(),
    })
  },

  updateUser: {
    path: `/internal/${serviceName}`,
    method: 'PUT',
    handler: handlers.updateUserController,
    schema: Joi.object<User.HttpRequest.Update>({
      id: Joi.string().required().uuid({ version: 'uuidv4' }),
      companyId: Joi.string().optional(),
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      password: Joi.string().optional(),
      provider: Joi.string().optional().valid('google', 'email'),
      providerId: Joi.string().optional(),
      photoUrl: Joi.string().optional(),
      phoneNumber: Joi.string().optional(),
    })
  }
});