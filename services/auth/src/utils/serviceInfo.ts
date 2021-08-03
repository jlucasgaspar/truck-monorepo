import { Service } from '@truckify/services-envs';

const { name, port } = Service.auth;
export const serviceName = name;
export const servicePort = port;