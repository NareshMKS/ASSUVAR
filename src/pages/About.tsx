
import { useEffect } from 'react';
import ThreeScene from '@/components/ThreeSimple';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
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

  return (
    <div className="min-h-screen bg-black text-white">
      <ThreeScene />
      <Navbar />
      
      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-montserrat font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">
            About Us
          </h1>
          <p className="text-xl md:text-2xl font-roboto text-white/70 max-w-3xl mx-auto mb-12">
            Innovative solutions with cutting-edge technology to transform your digital presence
          </p>
          <div className="w-24 h-24 mx-auto border-b-2 border-secondary flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-secondary animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Story section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-section">
              <h2 className="text-4xl font-montserrat font-bold mb-6 text-white">Our Story</h2>
              <div className="w-20 h-1 bg-secondary mb-8" />
              <p className="text-lg font-roboto text-white/70 mb-6">
                Founded in 2020, ASSUVAR began with a vision to bridge the gap between technology and artistic expression. Our team of dedicated professionals combines technical expertise with creative insight to deliver exceptional digital experiences.
              </p>
              <p className="text-lg font-roboto text-white/70">
                What sets us apart is our commitment to innovation and our ability to transform complex ideas into intuitive, visually stunning solutions that resonate with users and drive business growth.
              </p>
            </div>
            <div className="relative h-[400px] animate-section">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/50 to-secondary/30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-50 mix-blend-overlay" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-montserrat font-bold mb-4">Innovation</h3>
                  <p className="text-white/80 max-w-xs mx-auto">
                    Pushing boundaries with cutting-edge technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Our Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg font-roboto text-white/70 max-w-3xl mx-auto">
              Our core values define how we operate and inform every decision we make. They are the foundation of our culture and guide our approach to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to create cutting-edge solutions.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality in everything we do.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partnership to achieve exceptional results.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-secondary mb-6 mx-auto w-20 h-20 flex items-center justify-center border-2 border-secondary/30 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">{value.title}</h3>
                <p className="font-roboto text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Our Team</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg font-roboto text-white/70 max-w-3xl mx-auto">
              Meet the creative minds behind ASSUVAR. Our diverse team brings together expertise across various disciplines to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                name: 'Alex Morgan',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e9be8625',
              },
              {
                name: 'Jamie Taylor',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb',
              },
              {
                name: 'Casey Parker',
                role: 'Lead Developer',
                image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
              },
              {
                name: 'Morgan Riley',
                role: '3D Artist',
                image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-6 animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-6 bg-black rounded-xl shadow-lg p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full border-2 border-secondary"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-white-900 font-montserrat">{member.name}</h3>
                    <p className="text-secondary">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
