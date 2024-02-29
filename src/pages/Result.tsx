import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getResult from '../services/getResult';

export default function Result(): JSX.Element {
  const [result, setResult] = useState<string>('No result available');
  let params = useParams();
  let id: string = params.id || '';
  // console.log('params.id %s', params.id);

  useEffect(getResults, []);

  function getResults() {
    getResult(id).then(
      (res) => {
        console.log('result1 %s', res);
        setResult(res);
      },
      () => {
        // TODO: Add test
        console.error();
      },
    );
  }

  return (
    <>
      <h1>{result}</h1>
    </>
  );
}
