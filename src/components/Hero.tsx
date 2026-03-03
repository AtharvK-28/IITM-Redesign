import React from 'react';
import Button from './ui/Button';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#800020] to-[#4A0012] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-3/5 lg:pb-28 xl:pb-32">
          <main className="mt-24 mx-auto px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-36 lg:px-8 xl:mt-40">
            <div
              ref={ref}
              className={`sm:text-center lg:text-left transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
                  Transform Your Career with{' '}
                </span>
                <span className="block mt-2 bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-transparent bg-clip-text">
                  India's #1 Institute
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join IIT Madras's prestigious online degree programs. Learn from India's top faculty and advance your career with a degree that matters.
              </p>
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start space-x-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={scrollToPrograms}
                  className="animate-bounce"
                >
                  Explore Programs
                </Button>
                <a 
                  href="https://study.iitm.ac.in/ds/assets/pdf/Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="mt-3 sm:mt-0 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                  >
                    View Brochure
                  </Button>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Animated decorative element */}
      <div className="absolute right-0 top-0 h-full w-2/5 lg:block hidden">
        <div className="h-full w-full relative">
          <img
            src="https://doe.iitm.ac.in/wp-content/uploads/2021/06/245-2451831_iit-madras-logo.png"
            alt="IIT Madras Logo"
            className="h-full w-full object-contain p-16 opacity-60 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#800020] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;