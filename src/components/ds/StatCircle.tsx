interface StatCircleProps {
  number: string;
  description: string;
}

const StatCircle: React.FC<StatCircleProps> = ({ number, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#800020] to-[#4A0012] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg p-4">
        <div className="text-center px-4">
          <div className="text-4xl font-bold text-[#FFD700] mb-2">{number}</div>
          <p className="text-white text-sm leading-tight">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCircle;