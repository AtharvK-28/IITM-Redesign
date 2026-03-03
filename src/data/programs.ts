import { BookOpen, Cpu, Code } from 'lucide-react';

export const programs = [
  {
    title: 'BS in Data Science',
    description: 'Master data science, AI, and machine learning. Join 15,000+ students in India\'s first-ever online degree program.',
    icon: BookOpen,
    link: '/ds',
    stats: [
      { label: 'Enrolled Students', value: '15,000+' },
      { label: 'Industry Partners', value: '100+' }
    ]
  },
  {
    title: 'BS in Electronic Systems',
    description: 'Gain expertise in electronics, IoT, and embedded systems. Learn from industry experts and build cutting-edge solutions.',
    icon: Cpu,
    link: '/es',
    stats: [
      { label: 'Placement Rate', value: '95%' },
      { label: 'Lab Partners', value: '50+' }
    ]
  },
  {
    title: 'Diploma in Programming',
    description: 'Build a strong foundation in programming. Perfect for beginners and working professionals alike.',
    icon: Code,
    link: '/diploma',
    stats: [
      { label: 'Course Duration', value: '1 Year' },
      { label: 'Live Sessions', value: '200+' }
    ]
  }
];