import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="text-center p-6 rounded-lg hover:bg-white transition-colors duration-300">
      <Icon className="mx-auto h-12 w-12 text-[#FFD700]" />
      <h3 className="mt-4 text-lg font-medium text-[#800020]">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;