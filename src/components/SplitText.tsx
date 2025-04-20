
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText = ({ text, className = '' }: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // @ts-ignore - Using mock implementations
    if (!containerRef.current || !leftTextRef.current || !rightTextRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // markers: true, // Uncomment for debugging
      }
    });
    
    tl.to(leftTextRef.current, {
      x: '-120%',
      ease: 'power2.inOut',
    }, 0);
    
    tl.to(rightTextRef.current, {
      x: '120%',
      ease: 'power2.inOut',
    }, 0);
    
    return () => {
      // Cleanup ScrollTrigger when component unmounts
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative flex justify-center items-center overflow-hidden h-screen ${className}`}
    >
      <div 
        ref={leftTextRef}
        className="absolute left-0 w-full flex justify-end pr-1 text-white font-montserrat font-black tracking-tighter"
      >
        {text.split('').slice(0, Math.ceil(text.length / 2)).join('')}
      </div>
      
      <div 
        ref={rightTextRef}
        className="absolute right-0 w-full flex justify-start pl-1 text-secondary font-montserrat font-black tracking-tighter"
      >
        {text.split('').slice(Math.ceil(text.length / 2)).join('')}
      </div>
    </div>
  );
};

export default SplitText;
