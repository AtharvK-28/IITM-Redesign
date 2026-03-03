import DiplomaHeader from '../../components/diploma/DiplomaHeader';
import { BookOpen, Clock, Award, GraduationCap } from 'lucide-react';

const DiplomaAcademics = () => {
  return (
    <div className="min-h-screen bg-white">
      <DiplomaHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Academics</h1>
        
        {/* Program Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Program Overview</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <p className="text-gray-700 mb-6">
              The Diploma program offers specializations in Programming and Data Science, designed to provide industry-relevant skills and knowledge. Students can pursue either or both diplomas based on their interests and career goals.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Duration</h3>
                  <p className="text-sm text-gray-600">8 months - 2 years</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Credits</h3>
                  <p className="text-sm text-gray-600">27 credits per diploma</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Certification</h3>
                  <p className="text-sm text-gray-600">IIT Madras Diploma</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#800020] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Mode</h3>
                  <p className="text-sm text-gray-600">Online with in-person exams</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Course Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Programming Diploma</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Database Management Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Programming, Data Structures and Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Modern Application Development I & II</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Programming Concepts using Java</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>System Commands</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#FFF8E7] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Science Diploma</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Machine Learning Foundations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Business Data Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Machine Learning Techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Machine Learning Practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                  <span>Tools in Data Science</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#800020] mb-6">Assessment Structure</h2>
          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Continuous Evaluation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                    <span>Weekly Assignments (20%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                    <span>Monthly Quizzes (30%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                    <span>End Term Exam (50%)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Project Evaluation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                    <span>Project Implementation (40%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                    <span>Project Documentation (30%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#800020] rounded-full mt-2"></span>
                    <span>Project Viva (30%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiplomaAcademics;