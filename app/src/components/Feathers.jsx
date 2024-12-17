import React from "react";
import "@fontsource/nunito/700.css";
import car from "../Images/car.png";
import gold from "../Images/gold.png";
import searchs from "../Images/searchs.png";
import mobile from "../Images/mobile.png";

// Feature data with images
const features = [
  {
    icon: car,
    title: "Seamless Ride Integration",
    description:
      "Integration with a wider range of ride services to ensure users have access to nearby vehicles.",
    color: "#FEF0ED",
  },
  {
    icon: gold,
    title: "AI Driven Smart Time & Price Comparisons",
    description: "Find the best deals across a wide range of transportation modes.",
    color: "#E4E5FF",
  },
  {
    icon: searchs,
    title: "Unified Search",
    description:
      "Instantly view and compare transportation options from multiple providers in one place.",
    color: "#E9F7EF",
  },
  {
    icon: mobile,
    title: "Unified Ride Management",
    description:
      "Users can manage all their ride-hailing accounts within the single platform.",
    color: "#EBF3FD",
  },
];

export default function KeyFeatures() {
  return (
    <div className="w-full px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center bg-[#F9FFF9]">
      {/* Title */}
      <h2 className="max-w-[920px] font-nunito text-[32px] md:text-[40px] font-bold leading-tight text-[#091A11] mb-4">
        Key Features
      </h2>

      {/* Subheading Text */}
      <p className="max-w-[920px] font-nunito text-[18px] md:text-[22px] font-semibold leading-relaxed text-[#8D8D8D] mb-8">
        Easily find and compare rides, manage accounts, and access nearby vehicles—all in one smart platform.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 p-4 w-full max-w-[614px] h-auto rounded-md border border-[#EBEBEB] overflow-hidden group transition-transform duration-300 active:scale-95"
          >
            {/* Sliding Background */}
            <div
              className="absolute top-0 left-0 h-full w-[5%] transition-all duration-500 ease-in-out bg-opacity-75 group-hover:w-full group-active:w-full"
              style={{ backgroundColor: feature.color }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-4">
              {/* Image */}
              <div>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[62px] h-[62px] object-contain"
                />
              </div>
              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="w-auto py-2 px-6 rounded-lg bg-gradient-to-r from-[#24EE09] to-[#129600] text-white font-bold shadow-[4px_12px_32px_#00000033] hover:scale-105 transition-transform duration-300">
        Find Your Perfect Ride Now!
      </button>
    </div>
  );
}
