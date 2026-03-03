import { LucideIcon } from 'lucide-react';

interface PartnershipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const PartnershipCard = ({ icon: Icon, title, description, benefits }: PartnershipCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-[#800020]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#800020]" />
        </div>
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="font-medium text-[#800020]">Benefits:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-[#800020] rounded-full mr-2"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PartnershipCard;