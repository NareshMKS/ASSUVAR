
import { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
}

// A simple fallback component that mimics the split text effect with CSS
const SplitText = ({ text, className = '' }: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const fromCenter = (rect.top + rect.height / 2) - (windowHeight / 2);
      
      // Calculate a value between -1 and 1 based on element position
      const factor = Math.min(Math.max(fromCenter / (windowHeight / 2), -1), 1);
      
      // Apply transformation to left and right text
      const leftText = containerRef.current.querySelector('.left-text');
      const rightText = containerRef.current.querySelector('.right-text');
      
      if (leftText instanceof HTMLElement) {
        leftText.style.transform = `translateX(${-120 * factor}%)`;
      }
      
      if (rightText instanceof HTMLElement) {
        rightText.style.transform = `translateX(${120 * factor}%)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const midpoint = Math.ceil(text.length / 2);
  const leftText = text.substring(0, midpoint);
  const rightText = text.substring(midpoint);

  return (
    <div 
      ref={containerRef} 
      className={`relative flex justify-center items-center overflow-hidden h-screen ${className}`}
    >
      <div 
        className="left-text absolute left-0 w-full flex justify-end pr-1 text-white font-montserrat font-black tracking-tighter transition-transform duration-300"
      >
        {leftText}
      </div>
      
      <div 
        className="right-text absolute right-0 w-full flex justify-start pl-1 text-secondary font-montserrat font-black tracking-tighter transition-transform duration-300"
      >
        {rightText}
      </div>
    </div>
  );
};

export default SplitText;
