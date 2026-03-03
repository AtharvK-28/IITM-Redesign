import { BookOpen, CheckCircle } from 'lucide-react';

const RegularEntry = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Regular Entry</h2>
      
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">Qualifier Process</h3>
              <p className="text-gray-700 mb-4">
                All regular entry applicants must go through the Qualifier Process to earn admission to the Foundation Level.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Qualifier Preparation</h4>
                  <p className="text-gray-700">
                    The qualifier process includes 4 weeks of coursework based on lecture videos, assignments, and live sessions of the four foundational level courses:
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                    <li>English I</li>
                    <li>Mathematics for Data Science I</li>
                    <li>Statistics for Data Science I</li>
                    <li>Computational Thinking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">Eligibility Criteria</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Minimum Average Assignment Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">General Learner</td>
                      <td className="px-4 py-2">40%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">SC / ST / PwD with 40% disability</td>
                      <td className="px-4 py-2">30%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">PwD with 40% disability & SC / ST</td>
                      <td className="px-4 py-2">30%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">OBC-NCL / EWS</td>
                      <td className="px-4 py-2">35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Note: Relaxations in pass criteria indicated for various categories of learners is applicable ONLY for the qualifier process. 
                There will be no relaxations in terms of grades / pass criteria once registered into the program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularEntry;