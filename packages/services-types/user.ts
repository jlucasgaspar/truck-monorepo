import { Dates, Utils } from '@truckify/shared-types';

export namespace User {
  export namespace Model {
    export type Complete = Dates & {
      id: string;
      companyId?: string;
      name: string;
      email: string;
      password?: string | null;
      provider: Helpers.Provider;
      providerId?: string | null;
      photoUrl?: string;
      phoneNumber?: string;
    }
    export type WithoutId = Utils.WithoutId<Complete>;
    export type WithoutDates = Utils.WithoutDates<Complete>;
    export type WithoutDatesAndId = Utils.WithoutDatesAndId<Complete>;
  }

  export namespace HttpRequest {
    export type Create = Model.WithoutDatesAndId;
    export type Update = Partial<Model.WithoutDatesAndId> & { id: string; };
    export type GetById = { id: string; }
  }

  export namespace Core {
    export type Create = HttpRequest.Create;
    export type Update = HttpRequest.Update;
    export type GetById = HttpRequest.GetById;
  }

  export namespace Database {
    export type Insert = Core.Create;
    export type Update = Core.Update;
  }

  export namespace Helpers {
    export type Provider = 'google' | 'email';
  }
}