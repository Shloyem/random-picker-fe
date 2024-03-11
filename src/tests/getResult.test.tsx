import getResult from '../services/getResult';
import axiosInstance from '../services/axiosInstance';
import { Draw } from '../types/Draw';

jest.mock('../services/axiosInstance', () => ({
  get: jest.fn(),
}));

// Export to file
const drawMock: Draw = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ],
  result: 'Option 6',
  createdAt: new Date(1709752108401),
  drawAt: new Date(1709752111035),
  expiresAt: new Date(1709838508401),
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('Should return a json object on successful call', async () => {
  const response = { data: drawMock };
  (axiosInstance.get as jest.Mock).mockResolvedValue(response);

  const result = await getResult('mockID');

  expect(result).toEqual(drawMock);
});
