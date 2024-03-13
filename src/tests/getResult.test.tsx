import getResult from '../services/getResult';
import axiosInstance from '../services/axiosInstance';
import { drawMock } from './mocks/drawMock';

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
