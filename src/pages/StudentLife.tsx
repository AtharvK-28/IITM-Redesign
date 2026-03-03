import DSHeader from '../components/ds/DSHeader';
import StudentHouses from '../components/student-life/StudentHouses';
import HouseCouncil from '../components/student-life/HouseCouncil';
import Houses from '../components/student-life/Houses';
import Societies from '../components/student-life/Societies';
import Goals from '../components/student-life/Goals';

const StudentLife = () => {
  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StudentHouses />
        <HouseCouncil />
        <Houses />
        <Societies />
        <Goals />
      </div>
    </div>
  );
};

export default StudentLife;