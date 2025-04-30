import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi3,
  faBroadcastTower,
  faEarDeaf,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Icons specific to titles
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function HowItWorks2() {
  const steps = [
    {
      title: "Publishing and Scheduling",
      description:
        "Powered by AI, Now publish or schedule all your posts across multiple channels for all business locations.",
      icon: <FontAwesomeIcon icon={faWifi3} className="h-6 w-6 text-white" />,
    },
    {
      title: "Engagement",
      description:
        "Tune-in, track, and message your audience — all from a single dashboard.",
      icon: <FontAwesomeIcon icon={faEarDeaf} className="h-6 w-6 text-white" />,
    },
    {
      title: "Social Analytics and Reporting",
      description:
        "Measure success, understand results, and optimize your social strategy.",
      icon: (
        <FontAwesomeIcon
          icon={faBroadcastTower}
          className="h-6 w-6 text-white"
        />
      ),
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Do more with Bigwig Social AI
        </h2>
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

export default HowItWorks2;
