import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ to, children, className = '' }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}