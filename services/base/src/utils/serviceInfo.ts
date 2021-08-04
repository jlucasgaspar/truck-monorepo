import { Service, ServicesNames } from '@truckify/services-envs';

const service = ServicesNames.Base;

export const serviceName = service;
export const servicePort = Service[serviceName].port;