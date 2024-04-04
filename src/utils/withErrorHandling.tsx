import { Draw } from '../types/Draw';

// Define the type for the fetch function
type FetchFunction = (id: string) => Promise<any>;

// Define the type for the state setter functions
type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

// Define the type for the error handling function
type WithErrorHandling = (
  fetchFunction: FetchFunction,
  setDraw: SetStateFunction<Draw>,
  setError: SetStateFunction<string | null>,
) => (id: string) => void;

const withErrorHandling: WithErrorHandling = (
  fetchFunction,
  setDraw,
  setError,
) => {
  return function (id: string) {
    fetchFunction(id).then(
      (res) => {
        if ('error' in res) {
          console.error(res.error, res.originalError);
          setError(res.error);
        } else {
          setDraw(res);
        }
      },
      (e) => {
        console.error(e);
        setError('An unexpected error occurred.');
      },
    );
  };
};

export default withErrorHandling;
