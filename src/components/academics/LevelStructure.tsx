const LevelStructure = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Program Levels</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Foundation Level</h3>
          <ul className="space-y-2 text-sm">
            <li>32 credits</li>
            <li>8 courses</li>
            <li>1-3 years duration</li>
            <li>Exit with: Foundation Certificate</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Diploma Level</h3>
          <ul className="space-y-2 text-sm">
            <li>54 credits total</li>
            <li>Programming: 27 credits</li>
            <li>Data Science: 27 credits</li>
            <li>Exit with: Diploma(s)</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">BSc Degree Level</h3>
          <ul className="space-y-2 text-sm">
            <li>28 credits</li>
            <li>Total: 114 credits</li>
            <li>1-3 years duration</li>
            <li>Exit with: BSc Degree</li>
          </ul>
        </div>

        <div className="bg-[#FFF8E7] p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">BS Degree Level</h3>
          <ul className="space-y-2 text-sm">
            <li>28 credits</li>
            <li>Total: 142 credits</li>
            <li>1-3 years duration</li>
            <li>Exit with: BS Degree</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LevelStructure;