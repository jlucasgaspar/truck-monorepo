import { isEmpty } from 'ramda';
import { serviceName } from '../utils/serviceInfo';

export const ping = async (body: any): Promise<any> => {
  if (isEmpty(body)) {
    return `----- PING on service ${serviceName.toUpperCase()} -----`;
  }

  return {
    data: body,
    service: serviceName.toUpperCase()
  }
}