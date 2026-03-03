import { useState } from 'react';
import { certificates } from '../../config/certificates';
import { ZoomIn } from 'lucide-react';

const SampleCertificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">Sample Certificates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div 
            key={cert.title}
            className="relative group cursor-pointer"
            onClick={() => setSelectedCert(cert.image)}
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
            </div>
            <h3 className="mt-3 text-sm font-medium text-[#800020] text-center">{cert.title}</h3>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="max-w-4xl w-full">
            <img 
              src={selectedCert} 
              alt="Certificate Preview"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleCertificates;