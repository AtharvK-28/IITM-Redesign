import DSHeader from '../components/ds/DSHeader';
import { InstituteOverview, OnlineEducation, OnlineDegreeInitiative, FacultyCoordinators } from '../components/about';

const AboutIITM = () => {
  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InstituteOverview />
        <OnlineEducation />
        <OnlineDegreeInitiative />
        <FacultyCoordinators />
      </div>
    </div>
  );
};

export default AboutIITM;