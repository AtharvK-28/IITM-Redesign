import { Globe, MapPin } from 'lucide-react';

const International = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">International Students</h2>
      
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Globe className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">Global Access</h3>
              <p className="text-gray-700">
                This program is open to learners from all around the globe. You can study from IIT Madras and earn the BS in Data Science and Applications irrespective of the country you are from.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-4">International Exam Centers</h3>
              <p className="text-gray-700 mb-4">
                IIT Madras conducts in-person exams in the following cities outside India:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">UAE</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Dubai</li>
                    <li>Sharjah</li>
                    <li>Abu Dhabi</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Other Countries</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Sri Lanka - Colombo, Jaffna</li>
                    <li>Bahrain - Manama</li>
                    <li>Kuwait - Salmiya</li>
                    <li>Oman - Muscat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#800020]/20 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Remote Proctored Exams:</span> Learners residing in countries other than those listed above can enroll in the program and appear for remote proctored exams.
          </p>
          <p className="text-gray-700">
            For queries, contact: <a href="mailto:ge@study.iitm.ac.in" className="text-[#800020] hover:text-[#B8860B]">ge@study.iitm.ac.in</a>
          </p>
          <p className="mt-4 text-[#800020] font-semibold">
            Outside India learners who have taken exams with us till date: 159
          </p>
        </div>
      </div>
    </div>
  );
};

export default International;