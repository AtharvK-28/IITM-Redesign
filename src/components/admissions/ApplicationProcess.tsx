import { FileText, AlertCircle } from 'lucide-react';

const ApplicationProcess = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Application Process</h2>
      
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <FileText className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">Application Fee Structure</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Application Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2">General Category / OBC Applicant</td>
                      <td className="px-4 py-2">₹3000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">SC / ST Category / PwD (≥ 40% disability) Applicant</td>
                      <td className="px-4 py-2">₹1500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">SC / ST Category Applicant who is ALSO PwD (≥ 40% disability)</td>
                      <td className="px-4 py-2">₹750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#800020]/20 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Important Notes:</span>
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>An additional exam facilitation fee will apply for learners opting to write the Qualifier Exam in an Exam Centre outside India.</li>
                <li>Application will be considered only when, after payment, applicant also fills in further details and submits required documents for verification.</li>
                <li>Applications without details & documents, even if paid, will not be considered valid.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;