import { useEffect, useRef } from 'react';

export function useKey(code: string, cb: (event: KeyboardEvent) => void): void {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.code === code) {
        cbRef.current(event);
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [code]);
}
