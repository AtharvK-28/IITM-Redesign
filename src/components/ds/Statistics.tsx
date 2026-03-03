import { useInView } from 'react-intersection-observer';
import StatCircle from './StatCircle';

const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    {
      number: "20,000+",
      description: "Students doing this program along with another degree"
    },
    {
      number: "3000+",
      description: "Working Professionals studying in the program"
    },
    {
      number: "850+",
      description: "Secured Admission to Masters/PhD programs within and outside India"
    },
    {
      number: "20+",
      description: "BS students in Top 100 Ranks of GATE Exam 2024"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                inView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <StatCircle
                number={stat.number}
                description={stat.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;