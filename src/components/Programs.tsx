import React from 'react';
import ProgramCard from './ProgramCard';
import FeatureCard from './FeatureCard';
import { programs } from '../data/programs';
import { features } from '../data/features';
import { useInView } from 'react-intersection-observer';

const Programs = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div id="programs-section" className="py-20 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div 
        ref={sectionRef}
        className={`
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
          transition-all duration-1000 transform
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#800020] sm:text-4xl mb-4">
            World-Class Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700 mb-12">
            Choose from our industry-aligned degree programs designed for the future
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`
                transform transition-all duration-700 delay-${index * 200}
                hover:scale-105
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <ProgramCard {...program} />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                transform transition-all duration-700 delay-${index * 200}
                hover:scale-105
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;