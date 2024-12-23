import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi3, faBroadcastTower, faEarDeaf } from '@fortawesome/free-solid-svg-icons'; // Icons specific to titles

function HowItWorks2() {
  const steps = [
    {
      title: "Publishing and Scheduling",
      description: "Create, personalize, and post across all channels for every business location.",
      icon: <FontAwesomeIcon icon={faWifi3} className="h-6 w-6 text-gray-700 absolute top-4 left-4" />,
    },
    {
      title: "Engagement",
      description: "Tune-in, track, and message your audience — all from a single dashboard.",
      icon: <FontAwesomeIcon icon={faEarDeaf} className="h-6 w-6 text-gray-700 absolute top-4 left-4" />,
    },
    {
      title: "Social Analytics and Reporting",
      description: "Measure success, understand results, and optimize your social strategy.",
      icon: <FontAwesomeIcon icon={faBroadcastTower} className="h-6 w-6 text-gray-700 absolute top-4 left-4" />,
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-12">
        Do more with Handley Social AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-lg  p-6"
            >
              {step.icon}
              <h3 className="mt-8 text-xl md:text-3xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-lg text-gray-600 font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks2;
