import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-[#FFF8E7] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-3xl">
            <a 
              href="mailto:support@study.iitm.ac.in" 
              className="flex flex-col items-center gap-2 text-[#800020] hover:text-[#B8860B]"
            >
              <Mail className="w-5 h-5" />
              <span>support@study.iitm.ac.in</span>
            </a>
            
            <div className="flex flex-col items-center gap-2 text-[#800020]">
              <Phone className="w-5 h-5" />
              <span>7850999966</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-[#800020]">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">
                IITM BS Degree Office, 3rd Floor,<br />
                ICSR Building, IIT Madras,<br />
                Chennai - 600036
              </span>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-gray-600 max-w-2xl">
            Please use only the above methods for program queries. Response time: 3 working days.
            During peak periods, Google Meet links will be shared. Call wait times may be longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;