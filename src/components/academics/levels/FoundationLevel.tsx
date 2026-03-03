import { GraduationCap, Clock, CreditCard } from 'lucide-react';
import CourseTable from './CourseTable';

const foundationCourses = [
  { name: 'Mathematics for Data Science I', credits: 4, code: 'BSMA1001', prerequisites: 'None', corequisites: 'None' },
  { name: 'Statistics for Data Science I', credits: 4, code: 'BSMA1002', prerequisites: 'None', corequisites: 'None' },
  { name: 'Computational Thinking', credits: 4, code: 'BSCS1001', prerequisites: 'None', corequisites: 'None' },
  { name: 'English I', credits: 4, code: 'BSHS1001', prerequisites: 'None', corequisites: 'None' },
  { name: 'Mathematics for Data Science II', credits: 4, code: 'BSMA1003', prerequisites: 'BSMA1001', corequisites: 'None' },
  { name: 'Statistics for Data Science II', credits: 4, code: 'BSMA1004', prerequisites: 'BSMA1002, BSMA1001', corequisites: 'BSMA1003' },
  { name: 'Programming in Python', credits: 4, code: 'BSCS1002', prerequisites: 'BSCS1001', corequisites: 'None' },
  { name: 'English II', credits: 4, code: 'BSHS1002', prerequisites: 'BSHS1001', corequisites: 'None' }
];

const FoundationLevel = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Foundation Level</h2>
      <p className="mb-6 text-gray-700">
        The Foundation Level comprises courses in Mathematics, Statistics, Basics of Programming and Python, and English. 
        These courses have been chosen to ensure that the learner who passes these successfully is well prepared to proceed to the Diploma Level courses.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Requirements</h3>
          </div>
          <p className="text-sm">The learner should apply for and clear the Qualifier Process.</p>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Duration & Effort</h3>
          </div>
          <ul className="text-sm space-y-2">
            <li>1 - 3 years duration</li>
            <li>10 hrs/course/week</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Credits & Fee</h3>
          </div>
          <ul className="text-sm space-y-2">
            <li>8 courses</li>
            <li>32 credits</li>
            <li>₹32,000*</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#FFF8E7] p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">Options on successful completion</h3>
        <ul className="space-y-2">
          <li><strong>Exit:</strong> The learner may exit with a Foundational Certificate from Centre for Outreach and Digital Education (CODE), IIT Madras.</li>
          <li><strong>Proceed to next level:</strong> The learner can join the Diploma Level.</li>
        </ul>
      </div>

      <CourseTable courses={foundationCourses} />
      <p className="text-sm text-gray-600 mt-4">*Refer Fee Structure</p>
    </div>
  );
};

export default FoundationLevel;