import { Draw } from '../types/Draw';
import axiosInstance from './axiosInstance';

export default async function getResult(
  id: string,
): Promise<Draw | { error: string; originalError: Error }> {
  try {
    const response = await axiosInstance.get(`/result/${id}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    const typedError = error as Error;
    console.error('Error fetching result:', error);
    return {
      error: `Failed to fetch result: ${typedError.message}`,
      originalError: typedError,
    };
  }
}
