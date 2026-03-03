import DiplomaHeader from '../../components/diploma/DiplomaHeader';
import { Calendar, Users2, GraduationCap, FileText } from 'lucide-react';

const DiplomaAdmissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <DiplomaHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Admissions</h1>
        
        {/* Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Eligibility Criteria</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Educational Qualification</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Passed Class 12 or equivalent</li>
                    <li>No age restrictions</li>
                    <li>No minimum marks requirement</li>
                    <li>All streams (Science/Commerce/Arts) eligible</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users2 className="w-6 h-6 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Prerequisites</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Basic mathematics knowledge (Class 10 level)</li>
                    <li>Basic English communication skills</li>
                    <li>Access to computer/laptop with internet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Application Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-4">Important Dates</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Application Opens:</span>
                      <span>January 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Last Date to Apply:</span>
                      <span>March 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Qualifier Process:</span>
                      <span>April 2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Program Start:</span>
                      <span>May 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-4">Required Documents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>Class 12 Mark Sheet</li>
                    <li>Valid ID Proof</li>
                    <li>Recent Passport Size Photo</li>
                    <li>Category Certificate (if applicable)</li>
                    <li>Income Certificate (if applying for scholarship)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Fee Structure</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-white">
                    <th className="px-4 py-2 text-left">Program</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                    <th className="px-4 py-2 text-left">Total Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-2">Diploma in Programming</td>
                    <td className="px-4 py-2">8 months - 2 years</td>
                    <td className="px-4 py-2">₹62,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Diploma in Data Science</td>
                    <td className="px-4 py-2">8 months - 2 years</td>
                    <td className="px-4 py-2">₹62,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Both Diplomas</td>
                    <td className="px-4 py-2">1.5 - 3 years</td>
                    <td className="px-4 py-2">₹1,25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Fee waivers available for eligible candidates based on family income
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiplomaAdmissions;