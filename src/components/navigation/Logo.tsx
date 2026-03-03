import { Link } from 'react-router-dom';

interface LogoProps {
  isAtTop: boolean;
}

export default function Logo({ isAtTop }: LogoProps) {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="https://doe.iitm.ac.in/wp-content/uploads/2021/06/245-2451831_iit-madras-logo.png"
        alt="IIT Madras Logo" 
        className="h-12 w-12 object-contain"
      />
      <span className={`ml-3 text-xl font-bold ${isAtTop ? 'text-[#FFD700]' : 'text-[#800020]'}`}>
        IIT Madras
      </span>
    </Link>
  );
}