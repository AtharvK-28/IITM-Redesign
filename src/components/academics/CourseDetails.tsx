const CourseDetails = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Degree Level Course Details</h2>
      <div className="space-y-8">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Core Courses</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Core Courses Pair I</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Software Engineering</li>
                <li>Software Testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Core Courses Pair II</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>AI: Search Methods for Problem Solving</li>
                <li>Deep Learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Elective Courses</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Algorithmic Thinking in Bioinformatics</li>
              <li>Big Data and Biological Networks</li>
              <li>Data Visualization Design</li>
              <li>Speech Technology</li>
              <li>Industry 4.0</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Market Research</li>
              <li>Financial Forensics</li>
              <li>Linear Statistical Models</li>
              <li>Advanced Algorithms</li>
              <li>Statistical Computing</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Computer Systems Design</li>
              <li>Programming in C</li>
              <li>Large Language Models</li>
              <li>Deep Learning for Computer Vision</li>
              <li>Operating Systems</li>
            </ul>
          </div>
          <p className="text-sm mt-4 text-gray-600">Note: List of elective courses may change each term depending on availability.</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;