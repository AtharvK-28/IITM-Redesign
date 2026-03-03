import { Link } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import NavItem from './NavItem';
import SignInButton from '../ui/SignInButton';

const DSHeader = () => {
  return (
    <header className="bg-white shadow-sm pt-16">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-1 flex items-center space-x-6 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
            <SignInButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DSHeader;