import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  isAtTop: boolean;
}

export default function MobileMenu({ isOpen, isAtTop }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
      <div className="px-4 pt-2 pb-3 space-y-2">
        <Link to="/" className="block px-3 py-2 text-[#800020] hover:bg-[#FFF8E7] rounded-md">
          Home
        </Link>
        <Link to="/ds" className="block px-3 py-2 text-[#800020] hover:bg-[#FFF8E7] rounded-md">
          Data Science
        </Link>
        <Link to="/es" className="block px-3 py-2 text-[#800020] hover:bg-[#FFF8E7] rounded-md">
          Electronic Systems
        </Link>
        <Link to="/diploma" className="block px-3 py-2 text-[#800020] hover:bg-[#FFF8E7] rounded-md">
          Diploma
        </Link>
        <div className="px-3 py-2">
          <Button variant="primary" className="w-full">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}