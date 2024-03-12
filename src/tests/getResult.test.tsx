import getResult from '../services/getResult';
import axiosInstance from '../services/axiosInstance';
import { Draw } from '../types/Draw';
import { drawMock } from './mocks/drawMock';

jest.mock('../services/axiosInstance', () => ({
  get: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('Should return a json object on successful call', async () => {
  const response = { data: drawMock };
  (axiosInstance.get as jest.Mock).mockResolvedValue(response);

  const result = await getResult('mockID');

  expect(result).toEqual(drawMock);
  expect(result).toBeTruthy();
});
