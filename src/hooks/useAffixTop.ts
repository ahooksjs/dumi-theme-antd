import { useEffect, useRef } from 'react';

const useAffixTop = () => {
  const offsetTop = useRef(0);

  useEffect(() => {
    const main = document.getElementsByTagName('main')[0];

    if (!main) {
      return;
    }

    offsetTop.current = main.getBoundingClientRect().top;
  }, []);

  // +1: prevent the page from jumping when scrolling
  return offsetTop.current + 1;
};

export default useAffixTop;
