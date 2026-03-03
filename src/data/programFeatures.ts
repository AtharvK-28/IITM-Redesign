import { 
  Award,
  Wallet,
  Users,
  BookOpen,
  Database,
  Code,
  Library,
  BarChart,
  CircuitBoard,
  Wifi,
  Cpu,
  Terminal,
  GitBranch,
  Layout
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProgramFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const dataScience: ProgramFeature[] = [
  {
    icon: Award,
    title: 'Best Online Program',
    description: 'Awarded by QS Reimagine Education & The Wharton School, University of Pennsylvania'
  },
  {
    icon: Wallet,
    title: 'Scholarship',
    description: 'Learners from < 5LPA eligible for up to 75% fee waivers. 2000+ students study for free'
  },
  {
    icon: Users,
    title: 'No Age Limit',
    description: 'Learners from any age and any where in the world can study in this program. Current age of learners : 17 to 81 years'
  },
  {
    icon: BookOpen,
    title: 'Mode of Study',
    description: 'Pre-recorded and synchronous sessions, Weekly Online Assignments, In-person quizzes'
  },
  {
    icon: Database,
    title: 'Data Science Courses',
    description: 'ML Foundations, Deep Learning, Reinforcement Learning, Computer Vision, LLMs, Big Data'
  },
  {
    icon: Code,
    title: 'Programming Courses',
    description: 'Python, Java, PostGreSQL, Linux commands, C programming, Full Stack Application Development'
  },
  {
    icon: Library,
    title: 'Frameworks and Libraries',
    description: 'Flask, Vue, NumPy, Scikitlearn, Pytorch, OpenCV, Kafka and many more relevant for Data Science applications'
  },
  {
    icon: BarChart,
    title: 'Business Courses',
    description: 'Business Data Management, Business Analytics, Tools in Data Science, Financial Forensics, Market Research, Managerial Economics'
  }
];

export const electronicSystems: ProgramFeature[] = [
  {
    icon: CircuitBoard,
    title: 'Circuit Design',
    description: 'Master analog and digital circuit design'
  },
  {
    icon: Wifi,
    title: 'IoT Systems',
    description: 'Build connected devices and IoT solutions'
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Program microcontrollers and embedded devices'
  }
];

export const programmingDiploma: ProgramFeature[] = [
  {
    icon: Terminal,
    title: 'Programming Fundamentals',
    description: 'Master core programming concepts and algorithms'
  },
  {
    icon: GitBranch,
    title: 'Software Development',
    description: 'Learn industry-standard development practices'
  },
  {
    icon: Layout,
    title: 'Web Development',
    description: 'Build modern web applications'
  }
];