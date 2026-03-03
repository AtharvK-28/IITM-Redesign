import { GraduationCap, Clock, CreditCard } from 'lucide-react';
import CourseTable from './CourseTable';

const programmingCourses = [
  { name: 'Database Management Systems', credits: 4, code: 'BSCS2001', prerequisites: 'None', corequisites: 'None' },
  { name: 'Programming, Data Structures and Algorithms using Python', credits: 4, code: 'BSCS2002', prerequisites: 'None', corequisites: 'None' },
  { name: 'Modern Application Development I', credits: 4, code: 'BSCS2003', prerequisites: 'None', corequisites: 'BSCS2001' },
  { name: 'PROJECT Modern Application Development I - Project', credits: 2, code: 'BSCS2003P', prerequisites: 'None', corequisites: 'BSCS2003' },
  { name: 'Programming Concepts using Java', credits: 4, code: 'BSCS2005', prerequisites: 'None', corequisites: 'None' },
  { name: 'Modern Application Development II', credits: 4, code: 'BSCS2006', prerequisites: 'BSCS2003', corequisites: 'None' },
  { name: 'PROJECT Modern Application Development II - Project', credits: 2, code: 'BSCS2006P', prerequisites: 'BSCS2003P', corequisites: 'BSCS2006' },
  { name: 'System Commands', credits: 3, code: 'BSSE2001', prerequisites: 'None', corequisites: 'None' }
];

const dataScienceCourses = [
  { name: 'Machine Learning Foundations', credits: 4, code: 'BSCS2004', prerequisites: 'None', corequisites: 'None' },
  { name: 'Business Data Management', credits: 4, code: 'BSMS2001', prerequisites: 'None', corequisites: 'None' },
  { name: 'PROJECT Business Data Management - Project', credits: 2, code: 'BSMS2001P', prerequisites: 'None', corequisites: 'BSMS2001' },
  { name: 'Machine Learning Techniques', credits: 4, code: 'BSCS2007', prerequisites: 'None', corequisites: 'BSCS2004' },
  { name: 'Machine Learning Practice', credits: 4, code: 'BSCS2008', prerequisites: 'BSCS2004, BSCS2007', corequisites: 'None' },
  { name: 'PROJECT Machine Learning Practice - Project', credits: 2, code: 'BSCS2008P', prerequisites: 'None', corequisites: 'BSCS2008' },
  { name: 'Business Analytics', credits: 4, code: 'BSMS2002', prerequisites: 'BSMS2001', corequisites: 'None' },
  { name: 'Tools in Data Science', credits: 3, code: 'BSSE2002', prerequisites: 'None', corequisites: 'BSCS2004' }
];

const DiplomaLevel = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Diploma Level</h2>
      <p className="mb-6 text-gray-700">
        There are two sections in the Diploma Level with courses for Diploma in Programming and courses for Diploma in Data Science. 
        Each of these diplomas comprises 5 core courses, 2 projects and 1 skill enhancement course.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-[#800020]" />
            <h3 className="font-semibold">Requirements</h3>
          </div>
          <p className="text-sm">The learner should have cleared all 8 Foundation Level courses.</p>
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
            <li>12 courses + 4 projects</li>
            <li>54 credits</li>
            <li>₹1,25,000*</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#FFF8E7] p-6 rounded-lg mb-8">
        <h3 className="font-semibold mb-4">Options on successful completion</h3>
        <ul className="space-y-2">
          <li>Proceed to BSc Degree Level (after completing both diplomas)</li>
          <li>Exit with a Diploma in Programming from IIT Madras</li>
          <li>Exit with a Diploma in Data Science from IIT Madras</li>
          <li>Exit with both Diplomas from IIT Madras</li>
        </ul>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-semibold text-[#800020] mb-6">Courses for Diploma in Programming</h3>
          <p className="mb-6 text-gray-700">
            The Diploma in Programming lays a sturdy foundation in databases and programming concepts with data structures and algorithms. 
            The learner goes on to apply these in the building of a web application by the end of the diploma.
          </p>
          <CourseTable courses={programmingCourses} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#800020] mb-6">Courses for Diploma in Data Science</h3>
          <p className="mb-6 text-gray-700">
            The Diploma in Data Science exposes the learner to the holistic approach of gathering, analysing, and interpreting data for a variety of problems. 
            The courses on Business Data lays down the context and the need for the data, while the Machine Learning courses equip the learner to use and analyse this data towards impactful conclusions.
          </p>
          <CourseTable courses={dataScienceCourses} />
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">*Refer Fee Structure</p>
    </div>
  );
};

export default DiplomaLevel;