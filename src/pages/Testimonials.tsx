
import { useEffect } from 'react';
import ThreeScene from '@/components/ThreeSimple';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Testimonials = () => {
  useEffect(() => {
    // Animation with Intersection Observer
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

  return (
    <div className="min-h-screen bg-black text-white">
      <ThreeScene />
      <Navbar />
      
      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-montserrat font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl font-roboto text-white/70 max-w-3xl mx-auto mb-12">
            See what our clients have to say about working with us
          </p>
        </div>
      </section>
      
      {/* Testimonials grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
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
      
      <Footer />
    </div>
  );
};

export default Testimonials;