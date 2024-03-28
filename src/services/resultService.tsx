import { Draw } from '../types/Draw';
import axiosInstance from './axiosInstance';

// Higher-order function to create specific result functions
function createResultFunction(method: 'get' | 'put', errorMessage: string) {
  return async function (
    id: string,
  ): Promise<Draw | { error: string; originalError: Error }> {
    try {
      const response = await axiosInstance[method](`/result/${id}`);
      console.log('Response object: ', { response });
      return response.data;
    } catch (error) {
      const typedError = error as Error;
      console.error(`Error ${errorMessage}:`, error);
      return {
        error: `${errorMessage}: ${typedError.message}`,
        originalError: typedError,
      };
    }
  };
}

// Using the higher-order function to create specific functions
export const getResult = createResultFunction('get', 'fetching result');
export const generateResult = createResultFunction('put', 'generating result');
