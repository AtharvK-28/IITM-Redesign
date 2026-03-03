import { Link } from 'react-router-dom';
import { NavItem as NavItemType } from '../../config/navigation';

const NavItem = ({ name, path, isExternal }: NavItemType) => {
  if (isExternal) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#800020] hover:text-[#B8860B] text-sm whitespace-nowrap transition-colors"
      >
        {name}
      </a>
    );
  }

  return (
    <Link
      to={path}
      className="text-[#800020] hover:text-[#B8860B] text-sm whitespace-nowrap transition-colors"
    >
      {name}
    </Link>
  );
};

export default NavItem;