import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getResult from '../services/getResult';

type Draw = {
  result: string;
  options: string[];
  createdAt: Date;
  expiresAt: Date;
  drawAt: Date;
};

const initValue: Draw = {
  result: 'No result available',
  options: ['Option  1', 'Option  2'],
  createdAt: new Date(0),
  expiresAt: new Date(0),
  drawAt: new Date(0),
};

export default function Result(): JSX.Element {
  const [draw, setDraw] = useState<Draw>(initValue);
  let params = useParams();
  let id: string = params.id || '';
  // console.log('params.id %s', params.id);

  useEffect(getResults, []);

  function getResults() {
    getResult(id).then(
      (res) => {
        console.log({ res });
        setDraw(res);
      },
      () => {
        // TODO: Add test
        console.error();
      },
    );
  }

  return (
    <>
      <p>
        {draw.result !== '' ? (
          <>
            Draw Result: {draw.result}
            <br />
            <br />
            <br />
            Available Options: {draw.options.join(', ')}
            <br />
            Created On: {new Date(draw.createdAt).toLocaleString()}
            Drawn On: {new Date(draw.drawAt).toLocaleString()}
          </>
        ) : (
          'No result available'
        )}
      </p>
    </>
  );
}
