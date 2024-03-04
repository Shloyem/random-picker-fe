import { Draw } from '../types/Draw';
import axios from 'axios';

export default async function getResult(
  id: string,
): Promise<Draw | { error: string; originalError: any }> {
  try {
    const response = await axios.get(`http://localhost:3001/result/${id}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error('Error fetching result:', error);
    if (axios.isAxiosError(error)) {
      return {
        error: `Failed to fetch result: ${error.message}`,
        originalError: error,
      };
    } else {
      // Handle non-Axios errors
      return { error: 'An unexpected error occurred', originalError: error };
    }
  }
}
