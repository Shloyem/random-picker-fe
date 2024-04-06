import { useEffect, useRef } from 'react';

// Custom hook to run an effect only once, similar to componentDidMount, with optional cleanup and dependencies
export default function useEffectOnce(
  effect: () => void | (() => void),
  deps: any[] = [],
) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const cleanup = effect();
      return () => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      };
    }
  }, deps); // Dependencies array allows the effect to re-run if any dependency changes
}
