import { Draw } from '../../types/Draw';

const drawMockData: Draw = {
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

const drawMock: any = {
  data: drawMockData
}
export { drawMock };
