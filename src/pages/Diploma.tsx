import { useInView } from 'react-intersection-observer';
import { Code, BookOpen, Users, Clock, CreditCard, GraduationCap, Award, BrainCircuit } from 'lucide-react';
import Contact from '../components/Contact';
import DiplomaHeader from '../components/diploma/DiplomaHeader';

const stats = [
  { icon: Users, label: 'Active Students', value: '5,000+' },
  { icon: Award, label: 'Placement Rate', value: '92%' },
  { icon: BookOpen, label: 'Expert Faculty', value: '50+' },
  { icon: CreditCard, label: 'Avg. Package', value: '8 LPA' }
];

const features = [
  {
    icon: Code,
    title: 'Programming Excellence',
    description: 'Master modern programming languages and software development practices'
  },
  {
    icon: BrainCircuit,
    title: 'Data Science Skills',
    description: 'Learn data analysis, machine learning, and statistical computing'
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Study at your own pace with 24/7 access to course materials'
  },
  {
    icon: GraduationCap,
    title: 'Industry Recognition',
    description: 'Earn a diploma that is valued by top tech companies'
  }
];

const Diploma = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen bg-white">
      <DiplomaHeader />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#800020] to-[#4A0012] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div 
            ref={heroRef}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Diploma in Programming & Data Science
                <span className="block mt-2 text-[#FFD700]">IIT Madras</span>
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Start your journey in programming and data science with India's premier technical institute. 
                Perfect for beginners and working professionals looking to upskill.
              </p>
              <div className="flex gap-4">
                <a
                  href="#features"
                  className="bg-[#FFD700] text-[#800020] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
                >
                  Explore Program
                </a>
                <a 
                  href="https://study.iitm.ac.in/ds/assets/pdf/Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#FFD700] text-[#FFD700] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-[#800020] transition-colors"
                >
                  Download Brochure
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Code className="w-64 h-64 text-[#FFD700] opacity-90 animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#FFF8E7]">
        <div 
          ref={statsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-700 delay-${index * 200} ${
                    statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#800020]/10 mb-4">
                    <Icon className="w-6 h-6 text-[#800020]" />
                  </div>
                  <div className="text-3xl font-bold text-[#800020] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#800020] text-center mb-12">
            Program Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#800020]/10 rounded-lg">
                      <Icon className="w-6 h-6 text-[#800020]" />
                    </div>
                    <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Diploma;