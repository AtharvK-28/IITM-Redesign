interface HouseCardProps {
  name: string;
  image: string;
}

const HouseCard = ({ name, image }: HouseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#800020]">{name}</h3>
        <a 
          href="#" 
          className="mt-2 inline-block text-sm text-[#800020] hover:text-[#B8860B]"
        >
          Go to Website
        </a>
      </div>
    </div>
  );
};

export default HouseCard;