import { LucideIcon } from 'lucide-react';

interface ProgramFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramFeature({ icon: Icon, title, description }: ProgramFeatureProps) {
  return (
    <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#800020]/10 mb-4">
        <Icon className="w-6 h-6 text-[#800020]" />
      </div>
      <h3 className="text-lg font-semibold mb-3 text-[#800020]">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}