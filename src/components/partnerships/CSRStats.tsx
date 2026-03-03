import { useInView } from 'react-intersection-observer';

const CSRStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className="grid md:grid-cols-3 gap-8 mb-16"
    >
      <div className={`text-center transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-4xl font-bold text-[#800020] mb-2">1,700+</div>
        <p className="text-gray-700">Students Supported</p>
      </div>
      
      <div className={`text-center transition-all duration-1000 delay-200 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-4xl font-bold text-[#800020] mb-2">₹75L+</div>
        <p className="text-gray-700">Scholarship Amount</p>
      </div>
      
      <div className={`text-center transition-all duration-1000 delay-400 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-4xl font-bold text-[#800020] mb-2">15+</div>
        <p className="text-gray-700">Corporate Partners</p>
      </div>
    </div>
  );
};

export default CSRStats;