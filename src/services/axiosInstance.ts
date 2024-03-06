/* Axios interceptors allow you to intercept requests 
or responses before they are handled by then or catch, 
providing a centralized place to handle errors, log information, 
or even modify the request or response 
*/

import axios, { AxiosInstance, AxiosError } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  response => response, // Simply return the response if no error
  (error: AxiosError) => {
    console.error('An error occurred:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      const nonAxiosError = error as Error;
      console.error('General error:', nonAxiosError.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;