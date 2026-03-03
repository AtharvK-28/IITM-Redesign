import { houses } from '../../config/houses';
import HouseCard from './HouseCard';

const Houses = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Our Twelve Houses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house) => (
          <HouseCard key={house.name} {...house} />
        ))}
      </div>
    </div>
  );
};

export default Houses;