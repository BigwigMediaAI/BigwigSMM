import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import arrow icons

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I connect my social media accounts?",
      answer: "To connect your social media accounts, head to your dashboard, click 'Accounts' in the sidebar, and select the platforms you'd like to link. Follow the on-screen instructions.",
    },
    {
      question: "How can I schedule posts across multiple platforms?",
      answer: "You can schedule posts from the 'Content Calendar' on your dashboard. Simply choose the platform, create your post, and set the date and time for publishing.",
    },
    {
      question: "How do I track the performance of my posts?",
      answer: "You can track your post performance by navigating to the 'Analytics' section. Here, you'll find detailed reports on engagement, reach, and more.",
    },
    {
      question: "How can I manage my account settings?",
      answer: "Your account settings can be managed under the 'Settings' section in the dashboard. Here, you can update your profile, manage notifications, and adjust privacy settings.",
    },
    {
      question: "What types of content can I post?",
      answer: "You can post a variety of content including images, videos, and text-based posts. Each platform may have specific guidelines, which can be found in the platform's settings.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div
                className="flex justify-between items-center cursor-pointer px-4 py-3"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="text-gray-600"
                />
              </div>
              <div
                className={`px-4 pb-4 text-gray-600 transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
