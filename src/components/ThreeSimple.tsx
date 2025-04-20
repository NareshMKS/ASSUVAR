
import { useEffect, useRef } from 'react';

interface ThreeSceneProps {
  className?: string;
}

// A simple fallback component that displays a dark background with animated gradient dots
const ThreeScene = ({ className = '' }: ThreeSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mountRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Create particles
    const particles: { x: number; y: number; size: number; color: string; speed: number }[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        color: `rgba(${128 + Math.random() * 128}, ${128 + Math.random() * 128}, ${128 + Math.random() * 128}, ${Math.random() * 0.5 + 0.25})`,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particles
        particle.y += particle.speed;
        
        // Reset particle if it goes off screen
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={mountRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} />;
};

export default ThreeScene;
