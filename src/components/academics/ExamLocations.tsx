import { MapPin, Globe, AlertCircle } from 'lucide-react';

const ExamLocations = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Exam Cities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold">Students in India</h3>
              <p className="text-sm mt-2">
                All students residing in India or physically present in India on the day of an in-centre exam must write exams at one of the exam centres in India.
              </p>
            </div>
          </div>
          <div className="mt-4 pl-8">
            <h4 className="font-medium mb-2">Major Exam Cities</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <ul className="space-y-1">
                  <li>Mumbai</li>
                  <li>Delhi</li>
                  <li>Bangalore</li>
                  <li>Chennai</li>
                  <li>Hyderabad</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>Kolkata</li>
                  <li>Pune</li>
                  <li>Ahmedabad</li>
                  <li>Kochi</li>
                  <li>Chandigarh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <Globe className="w-5 h-5 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold">International Students</h3>
              <p className="text-sm mt-2">
                We conduct in-person exams in select international locations and offer remote proctored exams for other countries.
              </p>
            </div>
          </div>
          <div className="mt-4 pl-8">
            <h4 className="font-medium mb-2">In-Person Exam Countries</h4>
            <ul className="space-y-1 text-sm">
              <li>Bahrain</li>
              <li>Kuwait</li>
              <li>Oman</li>
              <li>UAE</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-4 rounded-lg border border-[#800020]/20">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#800020] mt-1" />
            <div className="text-sm">
              <p className="font-medium">Important Notes:</p>
              <ul className="mt-2 space-y-2">
                <li>Additional exam fee applies for exams outside India</li>
                <li>Remote proctored exams available for countries without exam centers</li>
                <li>For assistance with exam centers, contact: ge@study.iitm.ac.in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamLocations;