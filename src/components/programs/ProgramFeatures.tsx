import type { LucideIcon } from 'lucide-react';
import ProgramFeature from './ProgramFeature';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProgramFeaturesProps {
  features: Feature[];
}

export default function ProgramFeatures({ features }: ProgramFeaturesProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <ProgramFeature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}