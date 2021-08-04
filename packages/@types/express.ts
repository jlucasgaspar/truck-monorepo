import { User } from '@truckify/services-types/user';

declare namespace Express {
  interface Request {
    user: User.Model.Complete;
  }
}