import DiplomaHeader from '../../components/diploma/DiplomaHeader';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

const DiplomaAbout = () => {
  return (
    <div className="min-h-screen bg-white">
      <DiplomaHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">About IIT Madras</h1>
        
        {/* Institute Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Institute Overview</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="space-y-6">
              <p className="text-gray-700">
                Indian Institute of Technology Madras is one of the foremost institutes of national importance in higher technical education, basic and applied research. The Institute has sixteen academic departments and several advanced research centres in various disciplines of engineering and pure sciences, with nearly 100 laboratories organized in unique pattern of functioning.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Recognition</h3>
                    <p className="text-gray-700">Ranked #1 in NIRF Rankings for 5 consecutive years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-gray-700">Over 12,000 students and 600 faculty members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Education Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Our Experience in Online Education</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">NPTEL Pioneer</h3>
                  <p className="text-gray-700">
                    Started in 2003, NPTEL is one of the largest online repositories in the world of courses in engineering, basic sciences and selected humanities and social sciences subjects.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Online Learning Innovation</h3>
                  <p className="text-gray-700">
                    First IIT to launch full-fledged online degree programs, combining the flexibility of online learning with the rigour of an IIT education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Vision and Mission</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Vision</h3>
                <p className="text-gray-700">
                  To be an academic institution in dynamic equilibrium with its social, ecological and economic environment, striving continuously for excellence in education, research and technological service to the nation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mission</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• To create an environment that encourages learning and innovation</li>
                  <li>• To undertake research and development to meet the needs of society</li>
                  <li>• To train future leaders of society through residential education</li>
                  <li>• To develop new tools of learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiplomaAbout;