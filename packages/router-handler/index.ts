import { Router } from 'express';
import { celebrate } from 'celebrate';
import { Http } from '@truckify/shared-types';

type RouterOptions = {
  [name: string]: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    handler: (request: Http.Request<any>, response: Http.Response) => Promise<Http.Response>;
    schema?: object;
  }
}

export const createRouter = (options: RouterOptions) => {
  const router = Router();

  for (const [name, data] of Object.entries(options)) {
    const { path, method, handler, schema } = data;

    type MethodLowerCase = 'get' | 'post' | 'put' | 'delete' | 'patch';
    const methodLowerCase = method.toLowerCase() as MethodLowerCase;

    router[methodLowerCase](path, celebrate({ body: schema }), handler);
  }

  return router;
}