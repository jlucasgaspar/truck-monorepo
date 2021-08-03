import { mockBody } from './mock';
import { serviceName } from '../utils/serviceInfo';
import { ping as sut } from '../core';

const makeSut = () => sut(mockBody());

describe('ping', () => {
  it('should return the request.body if it is provided', async () => {
    const result = await makeSut();
    expect(result).toEqual({ data: mockBody(), service: serviceName.toUpperCase() });
  });

  it('should return ----- PING ----- if no request.body if it is provided', async () => {
    const result = await sut({});
    expect(result).toEqual(`----- PING on service ${serviceName.toUpperCase()} -----`);
  });
});