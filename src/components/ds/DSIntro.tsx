import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DSIntro = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    "World's first online BSc degree in Data Science",
    "Learn from India's #1 technical institute",
    "Industry-aligned curriculum with hands-on projects",
    "Multiple exit options available",
    "Flexible learning schedule",
    "Affordable education with scholarship options"
  ];

  return (
    <div className="bg-[#FFF8E7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            <span className="text-[#800020] font-semibold">IIT Madras</span>, India's top technical institute, welcomes you to the world's first 4-year{' '}
            <span className="text-[#800020] font-semibold">Bachelor of Science (BS) Degree in Data Science and Applications</span>{' '}
            with options to exit earlier in the foundation, diploma or BSc degree level.
          </p>
          <div className={`transition-all duration-500 ${isExpanded ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-left">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center mx-auto text-[#800020] hover:text-[#B8860B] transition-colors duration-300"
          >
            <span className="mr-2">{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <ChevronDown className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          <p className="text-xl text-[#800020] font-bold mt-8">
            More than 29,000 students currently studying with us in the program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DSIntro;