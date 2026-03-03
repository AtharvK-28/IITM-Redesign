const TermDetails = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Term Structure</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img 
          src="https://study.iitm.ac.in/ds/assets/img/academics/course_structure_web.png" 
          alt="Term Structure"
          className="w-full md:w-1/2 object-contain"
        />
        <div className="space-y-4">
          <div className="bg-[#FFF8E7] p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Term Overview</h3>
            <p className="text-sm">Every year is divided into three terms of four months each:</p>
            <ul className="list-disc list-inside mt-2">
              <li>January Term</li>
              <li>May Term</li>
              <li>September Term</li>
            </ul>
          </div>
          <div className="bg-[#FFF8E7] p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Term Structure</h3>
            <p className="text-sm">Each term consists of:</p>
            <ul className="list-disc list-inside mt-2">
              <li>12 weeks of coursework (video lectures and assignments)</li>
              <li>2 in-person invigilated Quizzes</li>
              <li>End Term Exams</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermDetails;