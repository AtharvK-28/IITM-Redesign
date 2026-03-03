import { useState } from 'react';
import DSHeader from '../components/ds/DSHeader';
import FAQNav from '../components/faq/FAQNav';
import FAQCategory from '../components/faq/FAQCategory';
import { faqCategories, faqData } from '../data/faq';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);

  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Frequently Asked Questions</h1>
        
        <FAQNav 
          categories={faqCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="space-y-8">
          {activeCategory === faqCategories[0] ? (
            // Show all categories when "General" is selected
            faqCategories.map((category) => (
              <FAQCategory 
                key={category}
                title={category} 
                faqs={faqData[category]}
              />
            ))
          ) : (
            // Show only selected category
            <FAQCategory 
              title={activeCategory}
              faqs={faqData[activeCategory]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;