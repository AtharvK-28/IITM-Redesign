import { GraduationCap, Clock, CreditCard } from 'lucide-react';

const BScLevel = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">BSc Degree Level</h2>
      <p className="mb-6 text-gray-700">
        The BSc Degree Level builds upon the foundation and diploma levels, offering advanced courses in Programming and Data Science. 
        This level prepares students for industry roles or further academic pursuits.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Requirements</h3>
          </div>
          <p className="text-sm">The learner should have cleared all 8 courses in Foundation Level and all 12 courses + 4 projects in Diploma Level.</p>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Duration & Effort</h3>
          </div>
          <ul className="text-sm space-y-2">
            <li>1 - 3 years duration</li>
            <li>15 hrs/course/week</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Credits & Fee</h3>
          </div>
          <ul className="text-sm space-y-2">
            <li>28 credits</li>
            <li>Total: 114 credits</li>
            <li>₹64,000 - ₹70,000*</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#FFF8E7] p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">Options on successful completion</h3>
        <ul className="space-y-2">
          <li>Proceed to the BS Degree Level</li>
          <li>Exit with a BSc Degree in Programming & Data Science from IIT Madras</li>
        </ul>
      </div>

      <p className="text-sm text-gray-600 mt-4">*Refer Fee Structure</p>
    </div>
  );
};

export default BScLevel;