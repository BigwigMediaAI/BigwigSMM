import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi3, faBroadcastTower, faEarDeaf } from '@fortawesome/free-solid-svg-icons'; // Icons specific to titles

function HowItWorks2() {
  const steps = [
    {
      title: "Publishing and Scheduling",
      description: "Powered by AI, Now publish or schedule all your posts across multiple channels for all business locations.",
      icon: <FontAwesomeIcon icon={faWifi3} className="h-6 w-6 text-gray-700" />,
    },
    {
      title: "Engagement",
      description: "Tune-in, track, and message your audience — all from a single dashboard.",
      icon: <FontAwesomeIcon icon={faEarDeaf} className="h-6 w-6 text-gray-700" />,
    },
    {
      title: "Social Analytics and Reporting",
      description: "Measure success, understand results, and optimize your social strategy.",
      icon: <FontAwesomeIcon icon={faBroadcastTower} className="h-6 w-6 text-gray-700" />,
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-12">
          Do more with Bigwig Social AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg p-6"
            >
              <div className="flex items-center space-x-4">
                {step.icon}
                <h3 className="text-xl md:text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-lg text-gray-600 font-medium">
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
