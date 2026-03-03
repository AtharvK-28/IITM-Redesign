import { Building2, Users, Briefcase, GraduationCap, HandHeart, BookOpen } from 'lucide-react';
import DSHeader from '../components/ds/DSHeader';
import PartnershipCard from '../components/partnerships/PartnershipCard';
import CSRStats from '../components/partnerships/CSRStats';
import CSRTestimonials from '../components/partnerships/CSRTestimonials';
import Awards from '../components/partnerships/Awards';
import Contact from '../components/Contact';

const partnershipTypes = [
  {
    icon: Building2,
    title: "Knowledge Partners",
    description: "Top leaders and researchers from companies like Google, Flipkart, PayPal, and Gramener contribute content to our courses.",
    benefits: [
      "Share industry expertise",
      "Shape future talent",
      "Access to cutting-edge research",
      "Collaboration opportunities"
    ]
  },
  {
    icon: HandHeart,
    title: "CSR Partners",
    description: "Support merit-cum-means scholarships for deserving students through CSR initiatives.",
    benefits: [
      "Make education accessible",
      "Transform lives",
      "Tax benefits",
      "Brand recognition"
    ]
  },
  {
    icon: Users,
    title: "Professional Speakers",
    description: "Industry experts share insights on current trends and technologies.",
    benefits: [
      "Knowledge sharing platform",
      "Network with students",
      "Industry visibility",
      "Talent pipeline development"
    ]
  },
  {
    icon: BookOpen,
    title: "Mentorship",
    description: "Experienced professionals guide and mentor our students throughout their journey.",
    benefits: [
      "Shape future leaders",
      "Early talent access",
      "Professional development",
      "Community building"
    ]
  },
  {
    icon: Briefcase,
    title: "Internships & Recruitment",
    description: "Partner with us to hire talented students for internships and full-time positions.",
    benefits: [
      "Access qualified talent pool",
      "Extended internship duration",
      "Flexible work arrangements",
      "Direct hiring channel"
    ]
  },
  {
    icon: GraduationCap,
    title: "Employee Upskilling",
    description: "Support your employees in earning diplomas in Programming or Data Science.",
    benefits: [
      "Flexible learning schedule",
      "Industry-relevant skills",
      "IIT Madras certification",
      "Improved employee retention"
    ]
  }
];

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#800020] mb-4">
            Partner with IIT Madras
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join India's premier technical institute in shaping the future of education through our innovative online degree programs.
          </p>
        </div>

        <Awards />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((type) => (
            <PartnershipCard key={type.title} {...type} />
          ))}
        </div>

        <div className="bg-[#FFF8E7] rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#800020] text-center mb-8">
            Our CSR Impact
          </h2>
          <CSRStats />
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              More than 1,700 students with family income less than 5LPA are currently being supported 
              in their journey of earning Diplomas and BS degrees from IIT Madras.
            </p>
            <a 
              href="mailto:jayabala@study.iitm.ac.in"
              className="text-[#800020] hover:text-[#B8860B] font-medium"
            >
              Contact us for CSR partnership details →
            </a>
          </div>
        </div>

        <CSRTestimonials />
      </div>

      <Contact />
    </div>
  );
};

export default Partnerships;