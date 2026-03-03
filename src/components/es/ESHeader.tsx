import { Link } from 'react-router-dom';
import SignInButton from '../ui/SignInButton';

const navItems = [
  { name: 'Academics', path: '/es/academics' },
  { name: 'Admissions', path: '/es/admissions' },
  { name: 'Resources', path: '/es/resources' },
  { name: 'Student Life', path: '/es/student-life' },
  { name: 'Testimonials', path: '/es/testimonials' },
  { name: 'Events', path: '/es/events' },
  { name: 'FAQ', path: '/es/faq' },
  { name: 'About IITM', path: '/es/about' }
];

const ESHeader = () => {
  return (
    <header className="bg-white shadow-sm pt-16">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-1 flex items-center space-x-6 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#800020] hover:text-[#B8860B] text-sm whitespace-nowrap transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <SignInButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ESHeader;