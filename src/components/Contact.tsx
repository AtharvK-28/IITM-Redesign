import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  compact?: boolean;
}

const Contact = ({ compact = false }: ContactProps) => {
  if (compact) {
    return (
      <div className="bg-[#FFF8E7] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:support@study.iitm.ac.in" className="flex items-center gap-2 text-[#800020] hover:text-[#B8860B]">
              <Mail className="w-4 h-4" />
              support@study.iitm.ac.in
            </a>
            <div className="flex items-center gap-2 text-[#800020]">
              <Phone className="w-4 h-4" />
              7850999966
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF8E7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#800020]">Contact Us</h2>
          <p className="mt-4 text-gray-600">Get in touch with our support team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <Mail className="w-8 h-8 text-[#800020] mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a 
              href="mailto:support@study.iitm.ac.in" 
              className="text-[#800020] hover:text-[#B8860B]"
            >
              support@study.iitm.ac.in
            </a>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <Phone className="w-8 h-8 text-[#800020] mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>7850999966</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <MapPin className="w-8 h-8 text-[#800020] mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-center text-sm">
              IITM BS Degree Office, 3rd Floor,<br />
              ICSR Building, IIT Madras,<br />
              Chennai - 600036
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-5 h-5 text-[#800020] mt-1" />
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                Please use ONLY the above methods for any queries regarding the program. Our normal response time is 3 working days.
              </p>
              <p>
                It might take longer during busy periods. We will share Google Meet links during such periods. Due to high call volumes, there might be long wait times and you may need to call multiple times to connect successfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;