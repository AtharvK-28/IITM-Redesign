import { Target, Users2, Heart, Sparkles } from 'lucide-react';

const Goals = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Our Goals & Initiatives</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">We nurture Leadership & Organisational skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Students gain invaluable skills and experiential knowledge</li>
                <li>Space to lead diverse community of Houses, Clubs or Groups</li>
                <li>Opportunities to conduct events and support fellow students</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">We enrich your experiences</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Build social skills through clubs and activities</li>
                <li>Express interest in forming new clubs</li>
                <li>Complement academics with diverse interests</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Users2 className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">We promote equity</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Inclusive community welcoming all backgrounds</li>
                <li>Gender equality and diversity training</li>
                <li>Safe virtual space against cyber bullying</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">We care for your wellbeing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Access to Wellness Community Center</li>
                <li>Professional support available</li>
                <li>Grievance redressal system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;