import React from "react";
import search from "../Images/search.png"
import Frame from "../Images/Frame.png"
import Frame1 from "../Images/Frame1.png"
import Frame2 from "../Images/Frame2.png"
 
const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            How It Works: Ride Smarter in Just 4 Steps
          </h2>
          <p className="mt-3 text-gray-600">
            Discover how easy it is to ride smarter with Cablink. Follow four
            simple steps to find, compare, and book the perfect ride in seconds!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4">
              <img
                src={search}
                alt="Search Icon"
                className="w-12 h-12"
              />
            </div>
            <p className="text-sm text-gray-500">STEP 01</p>
            <h3 className="mt-2 text-xl font-semibold text-gray-800">Search</h3>
            <p className="mt-2 text-center text-gray-600">
              Open the app and enter your destination.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4">
              {/* Replace with your SVG or exact image */}
              <img
                src={Frame} 
                alt="Compare Icon"
                className="w-12 h-12"
              />
            </div>
            <p className="text-sm text-gray-500">STEP 02</p>
            <h3 className="mt-2 text-xl font-semibold text-gray-800">
              Compare
            </h3>
            <p className="mt-2 text-center text-gray-600">
              View multiple ride options, including fares, schedules, and
              discounts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4">
              {}
              <img
                src={Frame1} 
                alt="Choose Icon"
                className="w-12 h-12"
              />
            </div>
            <p className="text-sm text-gray-500">STEP 03</p>
            <h3 className="mt-2 text-xl font-semibold text-gray-800">Choose</h3>
            <p className="mt-2 text-center text-gray-600">
              Select the transport mode that best suits your needs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4">
              {/* Replace with your SVG or exact image */}
              <img
                src={Frame2}
                alt="Go Icon"
                className="w-12 h-12"
              />
            </div>
            <p className="text-sm text-gray-500">STEP 04</p>
            <h3 className="mt-2 text-xl font-semibold text-gray-800">Go</h3>
            <p className="mt-2 text-center text-gray-600">
              Confirm your booking and enjoy a seamless journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
