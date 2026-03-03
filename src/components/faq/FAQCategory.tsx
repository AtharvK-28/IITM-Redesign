import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  faqs: FAQItem[];
}

const FAQCategory = ({ title, faqs }: FAQCategoryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-[#800020] mb-4">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-[#FFF8E7] rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-[#800020] transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 whitespace-pre-wrap">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQCategory;