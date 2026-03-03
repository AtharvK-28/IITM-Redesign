import { Laptop, MapPin, AlertTriangle } from 'lucide-react';

const Requirements = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Mandatory Requirements to Enroll and Learn</h2>
      
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Laptop className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Technical Requirements</h3>
              <p className="text-gray-700">
                Access to good internet connection as well as a laptop/desktop device will be a key requirement to learn effectively from our courses.{' '}
                <a href="#" className="text-[#800020] hover:text-[#B8860B] underline">
                  View complete system specifications
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Exam Centre Requirements</h3>
              <p className="text-gray-700">
                Learner should be able to travel to assigned exam centres for quizzes and exams, each term.{' '}
                <a href="#" className="text-[#800020] hover:text-[#B8860B] underline">
                  View exam centre locations
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#800020]/20 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> The details below are for the BS degree in Data Science and Applications from IIT Madras. 
                We also offer a Diploma Only Program for those who are interested exclusively in pursuing a Diploma in Programming or Diploma in Data Science.{' '}
                <a href="#" className="text-[#800020] hover:text-[#B8860B] underline">
                  Visit the Diploma Program website
                </a>{' '}
                for further details on this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;