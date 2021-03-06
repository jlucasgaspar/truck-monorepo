type ServiceMap = {
  [ServName in ServicesNames]: {
    port: number;
  }
}

export enum ServicesNames {
  Base = 'base',
  Auth = 'auth',
  User = 'user',
  Front = 'front'
}

export const Service: ServiceMap = {
  [ServicesNames.Base]: { port: 5000 },
  [ServicesNames.Auth]: { port: 5001 },
  [ServicesNames.User]: { port: 5002 },
  [ServicesNames.Front]: { port: 5003 }
}