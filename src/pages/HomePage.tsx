import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Contact from '../components/Contact';
import VideoGallery from '../components/programs/VideoGallery';
import { programVideos } from '../config/videos';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#800020] mb-8 text-center">Featured Program Videos</h2>
          <VideoGallery videos={programVideos} />
        </div>
      </div>
      <Contact />
    </>
  );
}