const AssessmentInfo = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Assessments</h2>
      <div className="space-y-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Core Assessment Types</h3>
          <ul className="space-y-3">
            <li>Weekly Assignments (online)</li>
            <li>Monthly in-person Quizzes</li>
            <li>In-person End Term Exam</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Additional Assessments</h3>
          <ul className="space-y-2">
            <li>Programming exams</li>
            <li>Mini projects</li>
            <li>Vivas</li>
            <li>Take home assignments</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Important Notes</h3>
          <ul className="space-y-3 text-sm">
            <li>Failed courses require full retake with fee payment</li>
            <li>Missed end term exam only: Can retake exam next term (₹1000 for foundation, ₹2000 for diploma/degree)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssessmentInfo;