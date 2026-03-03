import { useState } from 'react';
import { helpVideos } from '../../config/helpVideos';
import VideoGrid from './VideoGrid';

type Category = 'all' | 'overview' | 'structure' | 'admission';

const HelpVideos = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'overview', label: 'Program Overview' },
    { id: 'structure', label: 'Program Structure' },
    { id: 'admission', label: 'Admission Process' }
  ];

  const filteredVideos = helpVideos.filter(
    video => activeCategory === 'all' || video.category === activeCategory
  );

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Help Videos</h2>
      <p className="text-gray-700 mb-8">
        Short video clips to help better understand the IIT Madras Online Degree Program in Programming and Data Science.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as Category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-[#800020] text-white'
                : 'bg-[#FFF8E7] text-[#800020] hover:bg-[#800020]/10'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <VideoGrid videos={filteredVideos} />
    </div>
  );
};

export default HelpVideos;