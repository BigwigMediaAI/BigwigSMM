const pricingPlans = [
    {
      name: "Basic",
      price: "₹1,500/month",
      features: [
        "Manage up to 3 social media accounts",
        "Content scheduling and automation",
        "Basic analytics and reporting",
        "Limited customer support",
      ],
      buttonText: "Start Free Trial",
      buttonLink: "#",
    },
    {
      name: "Pro",
      price: "₹5,000/month",
      features: [
        "Manage up to 10 social media accounts",
        "Advanced content scheduling",
        "In-depth analytics and reporting",
        "Team collaboration tools",
        "Priority customer support",
      ],
      buttonText: "Get Started",
      buttonLink: "#",
    },
    {
      name: "Enterprise",
      price: "₹15,000/month",
      features: [
        "Manage unlimited social media accounts",
        "Custom content strategy and planning",
        "Advanced analytics with real-time data",
        "Dedicated account manager",
        "24/7 premium support",
      ],
      buttonText: "Contact Us",
      buttonLink: "#",
    },
  ];
  
  function PricingPlans() {
    return (
      <div id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Choose the Plan That Fits Your Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="text-center text-lg font-bold text-gray-700 mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a
                    href={plan.buttonLink}
                    className="inline-block py-2 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default PricingPlans;
  