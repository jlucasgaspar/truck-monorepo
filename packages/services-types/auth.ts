import { Dates } from '@truckify/shared-types';

export namespace Auth {
  export namespace Model {
    export type ResetPassword = Dates & {
      resetPasswordToken: string;
    }
  }

  export namespace HttpRequest {
    export type LoginWithEmailAndPassword = Helpers.EmailAndPassword;
    export type SignUpWithEmailAndPassword = Helpers.PasswordAndPasswordConfirmation & { name: string; email: string; }
    export type ResetPassword = Pick<Model.ResetPassword, 'resetPasswordToken'> & Helpers.PasswordAndPasswordConfirmation;
  }

  export namespace Core {
    export type LoginWithEmailAndPassword = HttpRequest.LoginWithEmailAndPassword;
    export type SignUpWithEmailAndPassword = Omit<HttpRequest.SignUpWithEmailAndPassword, 'passwordConfirmation'>;
    export type ResetPassword = Omit<HttpRequest.ResetPassword, 'passwordConfirmation'>;
  }

  export namespace Database {}

  export namespace Helpers {
    export type GoogleCredentials = { email: string; providerId: string; name: string; photoUrl?: string; phoneNumber?: string }
    export type EmailAndPassword = { email: string; password: string; }
    export type PasswordAndPasswordConfirmation = { password: string; passwordConfirmation: string; }
    export type JwtToken = { exp: number; token: string; }
    export type DecodedJwtToken = { exp: number; sub: string; }
  }
}