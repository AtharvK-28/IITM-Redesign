import { Building2 } from 'lucide-react';

const StudentHouses = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Student Houses</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4">
            All students in the programme will be divided into 12 houses named after the forests in India.
          </p>
          <p className="text-gray-700 mb-4">
            Your house is where you seek, share, support and study together and do what you love through clubs and activities.
          </p>
          <p className="text-gray-700 mb-4">
            We invite the student community to feel at home in their forest houses of Bandipur, Corbett, Gir, Kanha, Kaziranga, Nallamala, Namdapha, Nilgiri, Pichavaram, Saranda, Sundarbans and Wayanad.
          </p>
          <p className="text-gray-700">
            Each house accommodates nearly 30 groups of 20 students each where the group members are from the same city or neighbouring cities and house members are from across the country.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://study.iitm.ac.in/ds/assets/img/studentlife/HouseStructure-2.svg" 
            alt="House Structure"
            className="w-1/2 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentHouses;