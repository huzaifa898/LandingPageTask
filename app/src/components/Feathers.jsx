import React from "react";
import { FaCar, FaRobot, FaSearch, FaMobileAlt } from "react-icons/fa";

const KeyFeatures = () => {
  const features = [
    {
      title: "Seamless Ride Integration",
      description:
        "Integration with a wider range of ride services to ensure users have access to nearby vehicles.",
      icon: <FaCar />,
      hoverColor: "bg-green-400", // Green color for this card
    },
    {
      title: "AI Driven Smart Time & Price Comparisons",
      description:
        "Find the best deals across a wide range of transportation modes.",
      icon: <FaRobot />,
      hoverColor: "bg-pink-400", // Pink color for this card
    },
    {
      title: "Unified Search",
      description:
        "Instantly view and compare transportation options from multiple providers in one place.",
      icon: <FaSearch />,
      hoverColor: "bg-yellow-400", // Yellow color for this card
    },
    {
      title: "Unified Ride Management",
      description:
        "Users can manage all their ride-hailing accounts within the single platform.",
      icon: <FaMobileAlt />,
      hoverColor: "bg-red-400", // Red color for this card
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
              className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4 relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl text-green-700 hover:text-green-900 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>

              {/* Hover effect with gradient animation */}
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${feature.hoverColor} opacity-0 hover:opacity-100 transition-all duration-700 ease-in-out`}
                style={{ zIndex: -1 }}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#hello"
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
