interface FAQNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FAQNav = ({ categories, activeCategory, onCategoryChange }: FAQNavProps) => {
  return (
    <nav className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-[#800020] text-white'
              : 'bg-[#FFF8E7] text-[#800020] hover:bg-[#800020]/10'
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default FAQNav;