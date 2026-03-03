const ProgramOverview = () => {
  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold text-[#800020] mb-6">Overall Structure</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src="https://study.iitm.ac.in/ds/assets/img/academics/Programme_Structure.jpg" 
          alt="Program Structure"
          className="w-full md:w-1/3 object-contain"
        />
        
        <div className="space-y-6 md:w-2/3">
          <div className="prose max-w-none">
            <p className="text-gray-700">
              There are four levels in the IIT Madras Degree program and to get the BS Degree in Data Science and Applications from IIT Madras, a learner has to successfully complete all four levels.
            </p>
            <p className="text-gray-700">
              There is also the flexibility to exit at any level. Depending on the courses completed and credits earned, the learner can receive a Foundation Certificate from IITM CODE (Centre for Outreach and Digital Education) or Diploma(s) from IIT Madras or BSc Degree in Programming and Data Science from IIT Madras or BS Degree in Data Science and Applications from IIT Madras.
            </p>
          </div>

          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Courses and Credits in Each Level:</h3>
            <ul className="space-y-3">
              <li>Foundation Level: 32 credits | 8 courses</li>
              <li>
                Diploma Level:
                <ul className="ml-6 mt-2 space-y-2">
                  <li>Programming: 27 credits | 6 courses + 2 projects</li>
                  <li>Data Science: 27 credits | 6 courses + 2 projects</li>
                </ul>
              </li>
              <li>BSc Degree Level: 28 credits</li>
              <li>BS Degree Level: 28 credits</li>
            </ul>
          </div>

          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Total Credits Required:</h3>
            <ul className="space-y-2">
              <li>BSc Degree: 114 credits</li>
              <li>BS Degree: 142 credits</li>
            </ul>
          </div>

          <div className="bg-[#FFF8E7] p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Completion Time: 4 - 8 years</h3>
            <p className="text-sm">
              The time period is based on learner's preferred pace and performance in assessments. Expected learner engagement will be approximately 10hrs/course/week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;