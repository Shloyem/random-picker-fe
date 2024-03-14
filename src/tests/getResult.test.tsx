import getResult from '../services/getResult';
import axiosInstance from '../services/axiosInstance';
import { drawMock } from './mocks/drawMock';
import errorMock from './mocks/axiosNoBackendErrorMock';

jest.mock('../services/axiosInstance', () => ({
  get: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('Should return a json object on a successful call', async () => {
  console.log({ drawMock });
  (axiosInstance.get as jest.Mock).mockResolvedValue(drawMock);

  const result = await getResult('mockID');

  expect(drawMock).toHaveProperty('data');
  if ('data' in drawMock) {
    expect(result).toBe(drawMock.data);
  }
  expect(result).toBeTruthy();
});

it('Should fail on server not reponding', async () => {
  console.log({ errorMock });
  (axiosInstance.get as jest.Mock).mockRejectedValueOnce(errorMock);

  const result = await getResult('mockID');

  console.log({ result });
  expect(result).toHaveProperty('error');
  if ('error' in result) {
    expect(result.error).toBe('Failed to fetch result: Network Error');
  }

  expect(result).toHaveProperty('originalError');
});
