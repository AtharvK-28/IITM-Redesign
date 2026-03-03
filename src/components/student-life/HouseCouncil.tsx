import { Users } from 'lucide-react';

const HouseCouncil = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Upper House Council & Elections</h2>
      <div className="bg-[#FFF8E7] p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <Users className="w-6 h-6 text-[#800020] mt-1" />
          <div className="space-y-4">
            <p className="text-gray-700">
              Secretaries and Deputy Secretaries of all 12 houses constitute the Upper House Council that governs all houses.
            </p>
            <p className="text-gray-700">
              The Student Elections Committee constituted by Student Affairs conducts free and fair elections every August, where all the house members elect their Secretary and Deputy Secretary for a tenure of one year. The Secretary of the house in turn conducts elections for all groups, where all group members elect their Group leaders. The Secretaries and Group leaders are below 25 years of age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCouncil;