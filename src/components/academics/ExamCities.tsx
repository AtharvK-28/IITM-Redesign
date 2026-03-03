const ExamCities = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Exam Cities</h2>
      <iframe 
        src="https://www.google.com/maps/d/embed?mid=1anHQdN9iTWQEHNteb4-Wy3rDM7XnElRj&ehbc=2E312F" 
        width="100%" 
        height="480"
        className="border-0"
        title="Exam Cities Map"
      ></iframe>
    </div>
  );
};

export default ExamCities;