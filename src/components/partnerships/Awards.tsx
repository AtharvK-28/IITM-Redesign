import { Award } from 'lucide-react';

const awards = [
  {
    title: "ASSOCHAM CSR and Sustainability Award 2022",
    description: "Excellence in Supporting Education and Skill",
    image: "https://study.iitm.ac.in/ds/assets/img/csr/assocham%20award.jpg",
    year: "2022"
  },
  {
    title: "CSRUniverse Social Impact Awards",
    description: "Excellence in Education Category",
    image: "https://study.iitm.ac.in/ds/assets/img/csr/IIT%20Madras-csruniverse.jpg",
    year: "2023"
  }
];

const Awards = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-[#800020] text-center mb-8">
        Our Recognition
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award) => (
          <div key={award.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-duration-300">
            <div className="aspect-video">
              <img 
                src={award.image} 
                alt={award.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-[#FFD700]" />
                <span className="text-sm font-medium text-[#800020]">{award.year}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;