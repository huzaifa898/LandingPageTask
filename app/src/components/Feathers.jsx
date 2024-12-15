import React from "react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Seamless Ride Integration",
      description:
        "Integration with a wider range of ride services to ensure users have access to nearby vehicles.",
      icon: "🚗",
    },
    {
      title: "AI Driven Smart Time & Price Comparisons",
      description:
        "Find the best deals across a wide range of transportation modes.",
      icon: "🤖",
    },
    {
      title: "Unified Search",
      description:
        "Instantly view and compare transportation options from multiple providers in one place.",
      icon: "🔍",
    },
    {
      title: "Unified Ride Management",
      description:
        "Users can manage all their ride-hailing accounts within the single platform.",
      icon: "📱",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Key Features</h2>
        <p className="text-gray-600 mb-10">
          Easily find and compare rides, manage accounts, and access nearby
          vehicles—all in one smart platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Find Your Perfect Ride Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
