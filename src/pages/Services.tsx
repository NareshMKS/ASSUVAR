
import { useEffect } from 'react';
import ThreeScene from '@/components/ThreeSimple';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    // Simple animation with Intersection Observer
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

  const services = [
    {
      title: 'Website Development',
      description: 'Custom website solutions built with cutting-edge technologies for optimal performance and user experience.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Website Design',
      description: 'Creative and responsive designs that capture your brand essence and engage your audience.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Graphic Design',
      description: 'Professional graphic design services that help your brand stand out with compelling visuals.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      title: 'Automation Scripts',
      description: 'Custom automation solutions to streamline your business processes and increase efficiency.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Chatbots',
      description: 'Intelligent chatbot solutions to enhance customer service and engagement.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'CRM',
      description: 'Customer Relationship Management solutions to help you manage and grow your customer base.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'ERP',
      description: 'Enterprise Resource Planning systems to integrate and manage your business operations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
    {
      title: 'Social Media Management',
      description: 'Comprehensive social media management to boost your online presence and engagement.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-roboto text-white/70 max-w-3xl mx-auto mb-12">
            Comprehensive digital solutions for your business needs
          </p>
        </div>
      </section>
      
      {/* Services grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 group hover:bg-white/10 transition-colors duration-300 animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-secondary mb-6 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">{service.title}</h3>
                <p className="font-roboto text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-lg overflow-hidden animate-section">
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/70 to-secondary/30" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center opacity-40 mix-blend-overlay" />
            
            <div className="relative p-12 md:p-24 text-center">
              <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6">Ready to Get Started?</h2>
              <p className="text-xl font-roboto text-white/80 max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our services can help your business grow.
              </p>
              <a href="/Contact"
                className="inline-block bg-secondary text-black font-montserrat font-bold py-4 px-8 rounded-lg hover:bg-secondary/80 transition-colors duration-300">Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;