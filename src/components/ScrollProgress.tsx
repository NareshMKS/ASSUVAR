
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 h-48 w-1 bg-white/10 z-50">
      <div 
        className="bg-secondary w-full rounded-full transition-all duration-300"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
