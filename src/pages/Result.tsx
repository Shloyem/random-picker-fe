import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getResult, generateResult } from '../services/resultService';
import { Draw } from '../types/Draw';
import withErrorHandling from '../utils/withErrorHandling';
import useEffectOnce from '../utils/useEffectOnce';
import Button from '@mui/material/Button';

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

  const getResults = withErrorHandling(getResult, setDraw, setError);
  const generateResults = withErrorHandling(generateResult, setDraw, setError);

  const initialized = useRef(false);

  // Using a custom hook to run getResults only once on component mount
  // with optional cleanup and dependencies
  useEffectOnce(() => {
    getResults(id);
    // Example of a cleanup function
    return () => {
      console.log('Cleaning up...');
    };
  }, [id]); // Dependencies array, in this case, the effect will re-run if 'id' changes

  return (
    <>
      {!error && (
        <>
          {draw.result !== RESULT_DEFAULT && draw.result !== null ? (
            <>
              Draw Result: {draw.result}
              <br />
              <br />
              Drawn On: {new Date(draw.drawAt).toLocaleString()}
            </>
          ) : draw.result === RESULT_DEFAULT ? (
            <p>Result is loading.</p>
          ) : (
            <p>
              Result not generated yet.
              <br />
              <Button
                variant="contained"
                color="success"
                onClick={() => generateResults(id)}
              >
                Generate Result
              </Button>
            </p>
          )}
          <br />
          Available Options: {draw.options.join(', ')}
          <br />
          Created On: {new Date(draw.createdAt).toLocaleString()}
        </>
      )}
      {error && <p className="error-message">{error}</p>}
    </>
  );
}
