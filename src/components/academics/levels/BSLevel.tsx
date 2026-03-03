import { GraduationCap, Clock, CreditCard } from 'lucide-react';

const BSLevel = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">BS Degree Level</h2>
      <p className="mb-6 text-gray-700">
        The BS Degree Level is the highest level of the program, offering specialized courses in Data Science and Applications. 
        This level provides advanced knowledge and skills required for leadership roles in the field of Data Science.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Requirements</h3>
          </div>
          <p className="text-sm">The learner should have earned 114 credits and completed the BSc Degree Level to enter the BS Degree Level.</p>
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
            <li>Total: 142 credits</li>
            <li>₹94,000 - ₹1,24,000*</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#FFF8E7] p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">Exit</h3>
        <p>Once the learner successfully completes 142 credits and the course requirements, they can exit with a BS Degree in Data Science and Applications from IIT Madras.</p>
      </div>

      <p className="text-sm text-gray-600 mt-4">*Refer Fee Structure</p>
    </div>
  );
};

export default BSLevel;