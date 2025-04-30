import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faq_img from "../assets/faq-img.png";

const faqs = [
  {
    question: "How do I connect my social media accounts?",
    answer:
      "To connect your social media accounts, head to your dashboard, click 'Accounts' in the sidebar, and select the platforms you'd like to link. Follow the on-screen instructions.",
  },
  {
    question: "How can I schedule posts across multiple platforms?",
    answer:
      "You can schedule posts from the 'Content Calendar' on your dashboard. Simply choose the platform, create your post, and set the date and time for publishing.",
  },
  {
    question: "How do I track the performance of my posts?",
    answer:
      "You can track your post performance by navigating to the 'Analytics' section. Here, you'll find detailed reports on engagement, reach, and more.",
  },
  {
    question: "How can I manage my account settings?",
    answer:
      "Your account settings can be managed under the 'Settings' section in the dashboard. Here, you can update your profile, manage notifications, and adjust privacy settings.",
  },
  {
    question: "What types of content can I post?",
    answer:
      "You can post a variety of content including images, videos, and text-based posts. Each platform may have specific guidelines, which can be found in the platform's settings.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="text-white mb-10 py-4 px-10 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-2 text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly  py-3 items-start ">
        <div className="md:flex items-start hidden  ">
          <img src={faq_img} alt="FAQ Illustration" className="w-48 max-w-sm" />
        </div>
        <div className="space-y-5 pt-10  ">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* FAQ Box */}
              <div className="bg-gray-50 border text-gray-900 border-gray-700 rounded-lg pl-12 pr-6 py-3 relative max-w-xl w-full">
                {/* Number Badge (half-overlapping from left) */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-orange-500">
                  {index + 1}
                </div>

                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pt-2 text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
