import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Search",
      description: "Open the app and enter your destination.",
      color: "bg-yellow-400",
    },
    {
      step: "02",
      title: "Compare",
      description:
        "View multiple ride options, including fares, schedules, and discounts, all in one place.",
      color: "bg-orange-400",
    },
    {
      step: "03",
      title: "Choose",
      description:
        "Select the transport mode that best suits your needs.",
      color: "bg-teal-400",
    },
    {
      step: "04",
      title: "Go",
      description:
        "Confirm your booking and enjoy a seamless journey.",
      color: "bg-green-400",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          How It Works: Ride Smarter in Just 4 Steps
        </h2>
        <p className="text-gray-600 mb-12">
          Discover how easy it is to ride smarter with Cablink. Follow four
          simple steps to find, compare, and book the perfect ride in seconds!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold ${step.color}`}
              >
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
