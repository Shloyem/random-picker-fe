import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getResult from '../services/getResult';
import { Draw } from '../types/Draw';

const RESULT_DEFAULT = 'Loading result';

const initValue: Draw = {
  result: RESULT_DEFAULT,
  options: ['Option 1', 'Option 2'],
  createdAt: new Date(0),
  expiresAt: new Date(0),
  drawAt: new Date(0),
};

export default function Result(): JSX.Element {
  const [draw, setDraw] = useState<Draw>(initValue);
  const [error, setError] = useState<string | null>(null);

  let params = useParams();
  let id: string = params.id || '';

  useEffect(getResults, []);

  function getResults() {
    getResult(id).then(
      (res) => {
        if ('error' in res) {
          console.error(res.error, res.originalError);
          setError(res.error);
        } else {
          setDraw(res);
        }
      },
      (e) => {
        // This catch block will only catch errors thrown by the promise itself, not errors returned by the service
        console.error(e);
        setError('An unexpected error occurred.');
      },
    );
  }

  return (
    <>
      {!error && draw.result !== RESULT_DEFAULT && (
        <>
          Draw Result: {draw.result}
          <br />
          <br />
          <br />
          Available Options Were: {draw.options.join(', ')}
          <br />
          Created On: {new Date(draw.createdAt).toLocaleString()}
          <br />
          Drawn On: {new Date(draw.drawAt).toLocaleString()}
        </>
      )}
      {error && <p className="error-message">{error}</p>}
    </>
  );
}
