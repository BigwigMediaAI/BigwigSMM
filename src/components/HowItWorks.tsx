import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTasks, faMagic } from '@fortawesome/free-solid-svg-icons'; // Icons specific to titles

function HowItWorks() {
  const steps = [
    {
      title: "Social built for local",
      description: "Create and publish personalized social posts for multiple locations with ease.",
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6 text-gray-700 absolute top-4 left-4" />,
    },
    {
      title: "All-in-one",
      description: "Manage social presence, online reputation, and customer experience from one powerful, unified platform.",
      icon: <FontAwesomeIcon icon={faTasks} className="h-6 w-6 text-gray-700 absolute top-4 left-4" />,
    },
    {
      title: "AI powered",
      description: "Craft and refine engaging social posts and images through the power of AI.",
      icon: <FontAwesomeIcon icon={faMagic} className="h-6 w-6 text-gray-700 absolute top-4 left-4" />,
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-12">
        The #1 AI social platform for multi-location brands
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

export default HowItWorks;
