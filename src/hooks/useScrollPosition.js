/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useLayoutEffect, useState } from 'react';

function useScrollPosition() {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.pageYOffset]);
    }
    window.addEventListener('scroll', updateSize);
    updateSize();
    return () => window.removeEventListener('scroll', updateSize);
  }, []);
  return size;
}

export default useScrollPosition;
