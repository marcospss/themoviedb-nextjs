import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useOnScreen = (ref: { current: Element }) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default useOnScreen;
