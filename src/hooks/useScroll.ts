import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  isAtTop: boolean;
}

export function useScroll(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: 'up',
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      const isAtTop = scrollY < 10;
      
      setScrollState({
        scrollY,
        scrollDirection: direction,
        isAtTop,
      });
      
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return scrollState;
}