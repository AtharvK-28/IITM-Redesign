import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import Button from './ui/Button';
import NavLogo from './navigation/NavLogo';
import NavLink from './navigation/NavLink';
import MobileMenu from './navigation/MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection } = useScroll();

  const navClasses = `
    fixed w-full z-50 transition-all duration-300 bg-[#800020]
    ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 border-b border-white/10">
          <NavLogo isAtTop={false} />
          
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className="text-white hover:text-[#FFD700]">Home</NavLink>
            <NavLink to="/ds" className="text-white hover:text-[#FFD700]">Data Science</NavLink>
            <NavLink to="/es" className="text-white hover:text-[#FFD700]">Electronic Systems</NavLink>
            <NavLink to="/diploma" className="text-white hover:text-[#FFD700]">Diploma</NavLink>
            <Button variant="outline" size="sm">
              Apply Now
            </Button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} isAtTop={false} />
    </nav>
  );
}