import Button from '../ui/Button';
import { LucideIcon } from 'lucide-react';

interface ProgramHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProgramHeader({ title, description, icon: Icon }: ProgramHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-[#800020] to-[#4A0012] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-lg mb-8">{description}</p>
            <Button variant="secondary" size="lg">Download Brochure</Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Icon className="w-48 h-48 text-[#FFD700]" />
          </div>
        </div>
      </div>
    </div>
  );
}