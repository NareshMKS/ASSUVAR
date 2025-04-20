
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ThreeScene from '@/components/ThreeSimple';
import SplitText from '@/components/SimpleSplitText';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSmooth } from '@/hooks/useSmoothFallback';

const Index = () => {
  // Enable smooth scrolling
  useSmooth();
  
  // References for animation
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "ASSUVAR transformed our digital presence completely. Their web development and design services are outstanding.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, InnovateCo",
      content: "The automation scripts and CRM integration have saved us countless hours. Highly recommend their services!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupHub",
      content: "Their social media management has doubled our engagement. The team is professional and results-driven.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
  ];

  useEffect(() => {
    // Simple animation fallback with Intersection Observer
    if (heroRef.current) {
      const heroContent = heroRef.current.querySelector('.hero-content');
      if (heroContent instanceof HTMLElement) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(100px)';
        
        setTimeout(() => {
          heroContent.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
          heroContent.style.opacity = '1';
          heroContent.style.transform = 'translateY(0)';
        }, 100);
      }
    }
    
    // Animate sections on scroll using Intersection Observer
    const sections = document.querySelectorAll('.animate-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.transition = 'opacity 1s ease, transform 1s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach((section) => {
      if (section instanceof HTMLElement) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(100px)';
        observer.observe(section);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <ThreeScene />
      <ScrollProgress />
      <Navbar />
      
      {/* Hero section */}
      <section ref={heroRef} className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center hero-content">
          <h1 className="text-8xl md:text-9xl font-montserrat font-black mb-8">
            <span className="text-white">ASSU</span>
            <span className="text-secondary">VAR</span>
          </h1>
          <p className="text-xl md:text-2xl font-roboto text-white/70 max-w-2xl mx-auto mb-12">
            Innovative solutions with cutting-edge technology
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link
              to="/services"
              className="bg-secondary text-black font-montserrat font-bold py-4 px-8 rounded-lg hover:bg-secondary/80 transition-colors duration-300"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-white/20 font-montserrat font-bold py-4 px-8 rounded-lg hover:border-secondary hover:text-secondary transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Split text section */}
      <SplitText text="ASSUVAR" className="text-[20vw] h-[50vh]" />
      
      {/* About section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-section">
              <h2 className="text-4xl font-montserrat font-bold mb-6">About Us</h2>
              <div className="w-20 h-1 bg-secondary mb-8" />
              <p className="text-lg font-roboto text-white/70 mb-6">
                ASSUVAR is a cutting-edge digital agency specializing in creating immersive web experiences that combine stunning design with innovative technology.
              </p>
              <p className="text-lg font-roboto text-white/70 mb-8">
                Our team of experts brings together technical expertise and creative vision to deliver exceptional results that exceed expectations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center font-montserrat font-bold text-secondary hover:text-white transition-colors duration-300"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] animate-section">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-secondary/30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-50 mix-blend-overlay" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-secondary rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services section */}
      <section ref={servicesRef} className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Our Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg font-roboto text-white/70 max-w-3xl mx-auto">
              We offer a comprehensive range of services to help you achieve your digital goals. From web development to 3D design, we have the expertise to bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with cutting-edge technology.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Graphic Design',
                description: 'Professional graphic design services that help your brand stand out with compelling visuals.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                ),
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that creates intuitive, engaging interfaces.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/10 transition-colors duration-300 animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-secondary mb-6 mx-auto w-20 h-20 flex items-center justify-center border-2 border-secondary/30 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">{service.title}</h3>
                <p className="font-roboto text-white/70 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center font-montserrat font-bold text-secondary hover:text-white transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-secondary text-black font-montserrat font-bold py-4 px-8 rounded-lg hover:bg-secondary/80 transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg font-roboto text-white/70 max-w-3xl mx-auto">
              Explore some of our recent work that showcases our expertise and creative approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'TechVision',
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e9be8625',
              },
              {
                title: 'Nexus Portal',
                category: '3D Design',
                image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb',
              },
              {
                title: 'Quantum UI',
                category: 'UI/UX Design',
                image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
              },
              {
                title: 'Matrix Visualizer',
                category: 'Motion Graphics',
                image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
              },
            ].map((project, index) => (
              <div 
                key={index} 
                className="group relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-secondary text-sm font-roboto uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-4">{project.title}</h3>
                  <a
                    href="#"
                    className="inline-flex items-center font-montserrat font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-montserrat font-bold mb-10 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-montserrat font-bold">{testimonial.name}</h3>
                    <p className="text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="font-roboto text-white/70">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6 text-center animate-section">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl font-roboto text-white/70 max-w-2xl mx-auto mb-12">
            Contact us today to discuss how we can help bring your vision to life with our innovative solutions and expertise.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-black font-montserrat font-bold py-4 px-8 rounded-lg hover:bg-secondary/80 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
