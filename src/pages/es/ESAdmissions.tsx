import { Calendar, Users2, GraduationCap, FileText } from 'lucide-react';
import ESHeader from '../../components/es/ESHeader';

const ESAdmissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <ESHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Admissions</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#800020] mb-6">Eligibility Criteria</h2>
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Educational Background</p>
                    <p className="text-gray-700">Class 12 pass with Mathematics and Physics as core subjects</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users2 className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Age</p>
                    <p className="text-gray-700">No age restrictions</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#800020] mb-6">Application Process</h2>
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Application Timeline</p>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>Application Opens: January</li>
                      <li>Application Deadline: March</li>
                      <li>Entrance Exam: April</li>
                      <li>Results: May</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-[#800020] mt-1" />
                  <div>
                    <p className="font-medium">Required Documents</p>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>Class 12 Mark Sheet</li>
                      <li>Valid ID Proof</li>
                      <li>Recent Photograph</li>
                      <li>Category Certificate (if applicable)</li>
                    </ul>
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

export default ESAdmissions;