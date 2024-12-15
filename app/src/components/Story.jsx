import React, { useState } from "react";
import bus from '../Images/bus.png';

const CablinkStory = () => {
  const reviews = [
    {
      text: "The best transportation app I've ever used. I look forward to using this easy-to-use app almost daily. It is quick and efficient and simple. Thank you, Transit. Well done.",
      source: "App Store review",
    },
    {
      text: "Cablink is extremely user-friendly and updates constantly to ensure it's always functioning properly. Whether you're just visiting or living here you need this app to get around 💯.",
      source: "App Store review",
    },
    {
      text: "Cablink is EXACTLY what I want from a public transit navigation app. High quality, low monetization. No complaints.",
      source: "App Store review",
    },
    {
      text: "Cablink is extremely user-friendly and updates constantly to ensure it's always functioning properly. Whether you're just visiting or living here you need this app to get around 💯.",
      source: "App Store review",
    },
    {
      text: "An excellent and efficient platform for navigating city transit. The app is intuitive, reliable, and constantly improving. A must-have for every commuter!",
      source: "Google Play review",
    },
    {
      text: "I love how all modes of transport are integrated into one app. It's easy to use and makes traveling in the city much more convenient. Great work!",
      source: "Google Play review",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < reviews.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Cablink Story</h2>
            <p className="text-gray-600">
              In a world filled with fragmented transportation options,
              navigating through multiple platforms to find the best way to get
              around is time-consuming and frustrating. Cablink transforms this
              complexity into simplicity by unifying every mode of transportation
              into a single, user-friendly platform.
            </p>
            <p className="text-gray-600">
              Cablink is built to connect you to every mode of transport, whether
              it's a TAXI, train, bus, bicycle, or e-scooter—all in one seamless
              platform.
            </p>
            <p className="text-gray-600">
              Our platform serves as more than an aggregator; Cablink is your
              ultimate gateway to smarter, more affordable, and efficient travel,
              making urban mobility accessible, sustainable, and tailored to your
              lifestyle.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={bus} // Replace this with the actual image URL
              alt="Cablink illustration"
              className="w-full"
            />
          </div>
        </div>

        {/* Slider Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            What Our Users Say
          </h3>
          <div className="relative flex items-center">
            {/* Left Slider Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600"
              onClick={slideLeft}
            >
              &lt;
            </button>

            {/* Reviews Container */}
            <div className="flex overflow-hidden w-full space-x-6">
              {reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-lg shadow-md p-6 text-center space-y-4 w-72"
                >
                  <div className="text-yellow-500 text-lg">★★★★★</div>
                  <p className="text-gray-600">{`"${review.text}"`}</p>
                  <span className="text-sm text-gray-500 font-medium">
                    {review.source}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Slider Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600"
              onClick={slideRight}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CablinkStory;
