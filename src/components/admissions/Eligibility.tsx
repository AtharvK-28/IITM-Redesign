import { GraduationCap, Calculator } from 'lucide-react';

const Eligibility = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Who can apply for admission?</h2>
      
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Class 12 Pass Students</h3>
              <p className="text-gray-700">
                Anyone who has passed Class 12 or equivalent can apply irrespective of age or academic background. 
                Those who qualify can join the program immediately.{' '}
                <a href="#" className="text-[#800020] hover:text-[#B8860B] underline">
                  View list of accepted class 12 equivalents
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Calculator className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Class 11 Students</h3>
              <p className="text-gray-700">
                School students who have appeared for their Class 11 final exams can apply irrespective of their group/stream/board. 
                Those who qualify can join the program after passing Class 12.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#800020]/20 p-6 rounded-lg">
          <p className="text-gray-700">
            <span className="font-semibold">Prerequisites:</span> It is expected that the applicants have studied Mathematics and English in Class 10.
          </p>
          <p className="mt-4 text-gray-700">
            No additional eligibility other than the ones mentioned above is required to apply for the qualifier process or join the foundational level courses after clearing the qualifying exam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;