import { Request as Req, Response as Res } from 'express';

export namespace Http {
  export type Request<T> = Req<any, any, T>;
  export type Response = Res;
}