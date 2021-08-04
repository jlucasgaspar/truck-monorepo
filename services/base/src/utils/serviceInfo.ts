import { Service, ServicesNames } from '@truckify/services-envs';

const { User } = ServicesNames;

export const serviceName = User;
export const servicePort = Service[serviceName].port;