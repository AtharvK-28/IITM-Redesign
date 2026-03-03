import { Award, BookOpen, Users, Globe } from 'lucide-react';
import ESHeader from '../../components/es/ESHeader';

const ESAbout = () => {
  return (
    <div className="min-h-screen bg-white">
      <ESHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">About IIT Madras</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#800020] mb-6">Institute Overview</h2>
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Academic Excellence</p>
                    <p className="text-gray-700">Consistently ranked among India's top engineering institutions, known for pioneering research and innovation in technology and sciences.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Programs</p>
                    <p className="text-gray-700">Offering undergraduate, postgraduate, and doctoral programs across various engineering disciplines, with a focus on practical application and research.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#800020] mb-6">Our Vision</h2>
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Global Impact</p>
                    <p className="text-gray-700">Committed to creating global leaders in technology and innovation through world-class education and research.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Community</p>
                    <p className="text-gray-700">Fostering a diverse and inclusive community of scholars, researchers, and innovators from across the globe.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ESAbout;