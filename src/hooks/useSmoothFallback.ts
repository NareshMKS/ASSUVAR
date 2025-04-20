
import { useEffect } from 'react';

export const useSmooth = () => {
  useEffect(() => {
    // Simple smooth scroll fallback
    const smoothScroll = (event: WheelEvent) => {
      event.preventDefault();
      
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      window.scrollBy({
        top: delta * 30,
        behavior: 'smooth'
      });
    };
    
    // Only apply if the browser doesn't support smooth scrolling natively
    if (!('scrollBehavior' in document.documentElement.style)) {
      window.addEventListener('wheel', smoothScroll, { passive: false });
      
      return () => {
        window.removeEventListener('wheel', smoothScroll);
      };
    }
  }, []);
};
