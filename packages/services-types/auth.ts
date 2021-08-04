import { Dates } from '@truckify/shared-types';

export namespace Auth {
  export namespace Model {
    export type ResetPassword = Dates & {
      resetPasswordToken: string;
    }
  }

  export namespace HttpRequest {
    export type LoginWithEmailAndPassword = Helpers.EmailAndPassword;
  }

  export namespace Core {
    export type LoginWithEmailAndPassword = HttpRequest.LoginWithEmailAndPassword;
  }

  export namespace Database {}

  export namespace Helpers {
    export type EmailAndPassword = { email: string; password: string; }
    export type JwtToken = { exp: number; token: string; }
    export type DecodedJwtToken = { exp: number; sub: string; }
  }
}