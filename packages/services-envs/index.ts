type ServiceMap = {
  [ServName in ServicesNames]: {
    port: number;
    name: ServName
  }
}

enum ServicesNames {
  Base = 'base',
  Auth = 'auth',
  User = 'user'
}

export const Service: ServiceMap = {
  [ServicesNames.Base]: {
    name: ServicesNames.Base,
    port: 5000
  },
  [ServicesNames.Auth]: {
    name: ServicesNames.Auth,
    port: 5001
  },
  [ServicesNames.User]: {
    name: ServicesNames.User,
    port: 5001
  }
}