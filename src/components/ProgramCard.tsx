import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './ui/Card';

interface Stat {
  label: string;
  value: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  stats: Stat[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  stats
}) => {
  return (
    <Card className="relative hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="absolute top-6 right-6">
          <span className="inline-flex items-center justify-center p-3 bg-[#800020]/10 rounded-md">
            <Icon className="h-6 w-6 text-[#800020]" />
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[#800020] mt-4">
          {title}
        </h3>
        <p className="mt-4 text-gray-700">
          {description}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-[#FFD700]">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <a
          href={link}
          className="mt-6 inline-flex items-center text-[#800020] hover:text-[#B8860B]"
        >
          Learn more
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Card>
  );
};

export default ProgramCard;