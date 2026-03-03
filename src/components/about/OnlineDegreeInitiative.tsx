const OnlineDegreeInitiative = () => {
  const reasons = [
    "IIT Madras wishes to reach out to the many aspiring and motivated learners across India. An online degree is the perfect way to accomplish this, as it is not limited by on-campus physical infrastructure.",
    "Being an online program, we can accommodate between 50,000 to a lakh learners per batch.",
    "It is a game changer as working professionals, and learners of any age group can enroll in it.",
    "Students currently enrolled in a physical college in any program can join here and earn their second degree. (University Grants Commission had announced in 2020 that students will now be permitted to pursue two degree programs simultaneously if one is in online mode)",
    "Since there are no restrictions on the base subjects, students from other streams such as commerce / arts / law and of course, science students can enroll in this program. Data Science and Machine Learning is proving to be useful in all disciplines and fields.",
    "All courses will be offered 3 times a year. Thus, learners have considerable flexibility in the pace they can select to move ahead in the program.",
    "The program gives flexibility to learners to set their goals. Learners who successfully complete all 8 courses in Foundational Level can get a certificate and exit. Alternatively, they can proceed to do the more specialised courses in the Diploma Level and exit with a Diploma in Programming AND/OR Diploma in Data Science from IIT Madras. However, those interested in acquiring the BS degree can proceed to take up the Degree Level courses. Check the Academics page for details. Based on their requirements, they can acquire certifications that will help them with better employment opportunities.",
    "The program will be rigorous in its delivery, just as any other program from IIT Madras. Learners have to spend time with the coursework every week and achieve minimum criteria to pass every course.",
    "Being an online program, the course content can be accessed by learners from anywhere. They need to have a laptop / desktop, a good internet connection, and more importantly, the will to learn and work hard. Learners will be required to travel to designated exam centres only for the quizzes and exams each term. View section about exam cities.",
    "Each course will have a discussion forum with an active academic team to help in clearing doubts. We plan to bring in more personalised mentors to help students with Diploma Level and Degree Level courses.",
    "In future, we are considering tie-ups with industries to enable internships and project opportunities. This will also facilitate hiring of our learners who perform well in the program."
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Why an Online Degree Initiative?</h2>
      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-[#FFF8E7] p-4 rounded-lg">
            <p className="text-gray-700">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineDegreeInitiative;