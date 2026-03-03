import Logo from './Logo';

interface NavLogoProps {
  isAtTop: boolean;
}

export default function NavLogo({ isAtTop }: NavLogoProps) {
  return <Logo isAtTop={isAtTop} />;
}