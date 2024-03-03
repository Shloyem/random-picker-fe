// TODO: add error handling
import { Draw } from '../types/Draw';
import axios from 'axios';

export default async function getResult(id: string): Promise<Draw> {
  return axios.get(`http://localhost:3001/result/${id}`).then((response) => {
    console.log({ response });
    return response.data;
  });
}
