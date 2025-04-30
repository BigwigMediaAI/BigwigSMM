import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTasks,
  faMagic,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const steps = [
    {
      title: "AI powered",
      description:
        "Craft and refine engaging social media posts, images, hashtags and emoticons through the power of Artificial Intelligence.",
      icon: <FontAwesomeIcon icon={faMagic} className="h-6 w-6 text-white" />,
    },
    {
      title: "Built for Scalability",
      description:
        "Sync & Manage all your social media channels for all your business locations with ease.",
      icon: (
        <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-white" />
      ),
    },
    {
      title: "All-in-one",
      description:
        "Create, Publish & Interact on social media posts for all your business locations from one powerful unified platform.",
      icon: <FontAwesomeIcon icon={faTasks} className="h-6 w-6 text-white" />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          The #1 AI social platform for multi-location brands
        </h2>

        {/* Mobile View: Single box with arrows */}
        <div className="flex items-center justify-center space-x-4 md:hidden">
          <button
            onClick={prevStep}
            className="text-white hover:text-gray-300 transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>

          <div className="flex-1 rounded-lg p-6 bg-gray-800 max-w-sm">
            <div className="flex items-center space-x-4">
              {steps[currentStep].icon}
              <h3 className="text-xl font-semibold text-white">
                {steps[currentStep].title}
              </h3>
            </div>
            <p className="mt-4 text-base text-gray-300 font-medium">
              {steps[currentStep].description}
            </p>
          </div>

          <button
            onClick={nextStep}
            className="text-white hover:text-gray-300 transition"
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>

        {/* Desktop View: Grid of all steps */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg p-6 bg-gray-800"
              data-aos="zoom-in"
            >
              <div className="flex items-center space-x-4">
                {step.icon}
                <h3 className="text-xl md:text-lg font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-lg text-gray-300 font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
