import { CircuitBoard, Clock, CreditCard, GraduationCap, BookOpen, Award } from 'lucide-react';
import ESHeader from '../../components/es/ESHeader';

const ProgramOverview = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Program Overview</h2>
      <div className="bg-[#FFF8E7] p-6 rounded-lg">
        <p className="text-gray-700 mb-4">
          The BS in Electronic Systems program is designed to provide a strong foundation in electronics, embedded systems, and IoT. The program is structured to be completed in 4 years, with the flexibility to exit earlier with appropriate credentials.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Duration</h3>
              <p className="text-sm text-gray-600">4 years (flexible)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Total Credits</h3>
              <p className="text-sm text-gray-600">142 credits</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-[#800020] mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Qualification</h3>
              <p className="text-sm text-gray-600">BS Degree from IIT Madras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseStructure = () => {
  const levels = [
    {
      title: "Foundation Level",
      credits: 32,
      courses: [
        "Mathematics for Electronics I & II",
        "Physics for Electronics I & II",
        "Programming Fundamentals",
        "Digital Systems",
        "Electronic Devices",
        "English"
      ]
    },
    {
      title: "Diploma Level",
      credits: 54,
      courses: [
        "Analog Electronics",
        "Digital Electronics",
        "Microprocessors & Microcontrollers",
        "Communication Systems",
        "Control Systems",
        "Electronic Design & Fabrication",
        "IoT Systems",
        "Projects"
      ]
    },
    {
      title: "Degree Level",
      credits: 56,
      courses: [
        "VLSI Design",
        "Embedded Systems",
        "Signal Processing",
        "Power Electronics",
        "RF & Microwave Engineering",
        "Advanced IoT",
        "Industry Projects",
        "Electives"
      ]
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Course Structure</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <div key={level.title} className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <CircuitBoard className="w-6 h-6 text-[#800020]" />
              <h3 className="font-semibold">{level.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{level.credits} credits</p>
            <ul className="space-y-2">
              {level.courses.map((course) => (
                <li key={course} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800020] rounded-full"></span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const AssessmentInfo = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Assessment Structure</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#800020]" />
            <h3 className="font-semibold">Continuous Assessment</h3>
          </div>
          <ul className="space-y-2">
            <li className="text-gray-700">Weekly Online Assignments (20%)</li>
            <li className="text-gray-700">Lab Work and Projects (30%)</li>
            <li className="text-gray-700">Mid-Term Examinations (20%)</li>
            <li className="text-gray-700">End-Term Examinations (30%)</li>
          </ul>
        </div>
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-[#800020]" />
            <h3 className="font-semibold">Grading System</h3>
          </div>
          <ul className="space-y-2">
            <li className="text-gray-700">Letter Grades: S to F</li>
            <li className="text-gray-700">Minimum passing grade: D</li>
            <li className="text-gray-700">CGPA calculated on 10-point scale</li>
            <li className="text-gray-700">Separate grade cards for each level</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const LearningMethods = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Learning Methods</h2>
      <div className="bg-[#FFF8E7] p-6 rounded-lg">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Online Learning</h3>
            <p className="text-gray-700">Video lectures, interactive content, and virtual labs accessible 24/7</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Practical Sessions</h3>
            <p className="text-gray-700">Virtual lab sessions and simulation-based learning for hands-on experience</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Live Sessions</h3>
            <p className="text-gray-700">Regular doubt-clearing sessions with faculty and teaching assistants</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Project Work</h3>
            <p className="text-gray-700">Industry-relevant projects and hands-on assignments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ESAcademics() {
  return (
    <div className="min-h-screen bg-white">
      <ESHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Academics</h1>
        <ProgramOverview />
        <CourseStructure />
        <AssessmentInfo />
        <LearningMethods />
      </div>
    </div>
  );
}