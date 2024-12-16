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
            <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Nunito', fontSize: '40px', fontWeight: '700', lineHeight: '41.6px', textAlign: 'left' }}>
              Cablink Story
            </h2>
            <div className="space-y-4 text-left">
              <p className="text-gray-500 text-lg font-semibold">
                In a world filled with fragmented transportation options,
                navigating through multiple platforms to find the best way to get
                around is time-consuming and frustrating. Cablink transforms this
                complexity into simplicity by unifying every mode of transportation
                into a single, user-friendly platform.
              </p>
              <p className="text-gray-500 text-lg font-semibold">
                Cablink is built to connect you to every mode of transport, whether
                it's a TAXI, train, bus, bicycle, or e-scooter—all in one seamless
                platform.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={bus} // Replace this with the actual image URL
              alt="Cablink illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CablinkStory;
