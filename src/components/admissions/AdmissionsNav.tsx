import { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'important-dates', label: 'Important Dates' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'application-process', label: 'Application Process' },
  { id: 'regular-entry', label: 'Regular Entry' },
  { id: 'jee-entry', label: 'JEE-based Entry' },
  { id: 'international', label: 'International Students' }
];

const AdmissionsNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-20 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                whitespace-nowrap text-sm font-medium transition-colors
                ${activeSection === id 
                  ? 'text-[#800020] border-b-2 border-[#800020]' 
                  : 'text-gray-600 hover:text-[#800020]'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AdmissionsNav;