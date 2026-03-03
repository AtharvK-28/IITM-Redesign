import { CircuitBoard, Cpu, Wifi, Users, BookOpen, Trophy, GraduationCap, BrainCircuit, Microscope, Rocket } from 'lucide-react';
import ESHeader from '../components/es/ESHeader';
import ApplicationBanner from '../components/ds/ApplicationBanner';
import ContactInfo from '../components/ui/ContactInfo';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: "5,000+", description: "Students Enrolled" },
  { number: "50+", description: "Industry Partners" },
  { number: "95%", description: "Placement Rate" },
  { number: "₹12L", description: "Average Package" }
];

const features = [
  {
    icon: CircuitBoard,
    title: "Circuit Design",
    description: "Master analog and digital circuit design with industry-standard tools and practices"
  },
  {
    icon: BrainCircuit,
    title: "Signal Processing",
    description: "Learn advanced signal processing techniques and their applications"
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Program microcontrollers and develop embedded solutions"
  },
  {
    icon: Wifi,
    title: "IoT Development",
    description: "Create connected devices and IoT applications for real-world problems"
  },
  {
    icon: Microscope,
    title: "VLSI Design",
    description: "Design and implement Very Large Scale Integration circuits"
  },
  {
    icon: Rocket,
    title: "Industry Projects",
    description: "Work on real industry projects with leading tech companies"
  }
];

const ESHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#800020] to-[#4A0012] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BS in Electronic Systems
              <span className="block mt-2 text-[#FFD700]">IIT Madras</span>
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Master the future of electronics with India's premier technical institute. Join our comprehensive program covering circuit design, embedded systems, IoT, and more.
            </p>
            <div className="flex gap-4">
              <a 
                href="#features"
                className="bg-[#FFD700] text-[#800020] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Explore Program
              </a>
              <a 
                href="https://study.iitm.ac.in/es/assets/pdf/Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#FFD700] text-[#FFD700] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-[#800020] transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <CircuitBoard className="w-64 h-64 text-[#FFD700] opacity-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from IIT Madras's renowned professors and industry experts"
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      description: "Study online at your own pace with structured guidance"
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Earn a degree that's respected by top tech companies"
    },
    {
      icon: GraduationCap,
      title: "Career Support",
      description: "Get placement assistance and industry connections"
    }
  ];

  return (
    <div className="bg-[#FFF8E7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#800020] text-center mb-12">
          Why Choose Our Program?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#800020]/10 mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-[#800020]" />
                </div>
                <h3 className="text-xl font-semibold text-[#800020] text-center mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="bg-white py-20">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.description}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-gradient-to-br from-[#800020] to-[#4A0012] rounded-lg p-6 text-center text-white">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">{stat.number}</div>
                <p className="text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#800020] text-center mb-12">
          Program Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-[#FFF8E7] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#800020]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#800020]" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-[#800020]">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function ElectronicSystems() {
  return (
    <div>
      <ESHeader />
      <ApplicationBanner />
      <ESHero />
      <Statistics />
      <WhyChooseUs />
      <Features />
      <ContactInfo />
    </div>
  );
}