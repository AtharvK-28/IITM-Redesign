import { Award, CheckSquare } from 'lucide-react';

const JEEEntry = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">JEE-based Entry</h2>
      
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Award className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <p className="text-gray-700 mb-4">
                Candidates qualified to appear for current year's JEE Advanced can directly join our program by following these steps:
              </p>
              <ol className="space-y-4 list-decimal list-inside ml-4">
                <li className="text-gray-700">
                  Complete the application form and pay the admission fee of Rs 3000/-
                </li>
                <li className="text-gray-700">
                  After JEE advanced proof verification, you become eligible to directly start the foundation level courses
                </li>
                <li className="text-gray-700">
                  Register for courses:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>English 1</li>
                    <li>Maths 1</li>
                    <li>Statistics 1</li>
                    <li>Computational Thinking</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  You can register for 1-4 courses depending on your available study time
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#800020]/20 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <CheckSquare className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Important Notes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Course registration opens after verification</li>
                <li>Content access granted after course registration</li>
                <li>Continue as a regular student after registration</li>
                <li>Can be pursued alongside another college or degree</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JEEEntry;