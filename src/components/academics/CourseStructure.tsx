const CourseStructure = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Course Structure</h2>
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Online Courses & Assignments</h3>
          <p>Duration of each course: 12 weeks - Each week comprising 2-3 hrs of videos, practice questions, text transcripts and online graded assignment(s).</p>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Course Registration Rules</h3>
          <ul className="space-y-3">
            <li>In each term, register for up to 4 courses based on CCC (Credit Clearing Capability)</li>
            <li>Foundation Level CCC based on Qualifier Exam or previous term's End Term Exams</li>
            <li>Diploma Level and beyond CCC is fixed at 4</li>
            <li>Complete Foundation Level before Diploma Level courses</li>
            <li>Complete Diploma Level before Degree Level courses</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseStructure;