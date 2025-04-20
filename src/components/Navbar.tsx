
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-montserrat font-bold text-white" >
          ASSU<span className="text-accent">VAR</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link 
            onClick={() => window.scrollTo({ top: document.getElementById('services').offsetTop, behavior: 'smooth' })}
              key={link.path}
              to={link.path}
              className={`font-roboto relative text-sm uppercase tracking-widest
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left ${
                  location.pathname === link.path 
                    ? 'text-secondary after:scale-x-100' 
                    : 'text-white/80 hover:text-white'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;