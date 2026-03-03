import ESHeader from '../../components/es/ESHeader';

const ESResources = () => {
  return (
    <div className="min-h-screen bg-white">
      <ESHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Resources</h1>
        {/* Content will be similar to DS resources but with ES specific information */}
      </div>
    </div>
  );
};

export default ESResources;