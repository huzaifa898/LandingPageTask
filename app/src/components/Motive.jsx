import React from "react";
import motive from "../Images/motive.png" // Replace with your actual image path

const CablinkHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white py-8 px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pl-12 xl:pl-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          <span className="text-gray-900">Fast, </span>
          <span className="text-green-500">Reliable, </span>
          <span className="text-green-500">and Affordable</span>
          <span className="text-gray-900"> Rides at Your</span>
          <span className="text-black"> Fingertips</span>
        </h1>
        <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Tired of juggling apps for the best ride? Cablink simplifies
          ride-hailing in Saudi Arabia by bringing multiple platforms together.
          Compare prices, explore discounts, track rides live, and find options
          that fit your preferences—all in one app. Save time, money, and enjoy
          safe, convenient travel. Download Cablink and book your ride
          effortlessly today!
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Image of Phones and Elements */}
        <img
          src={motive}
          alt="Cablink App Mockup"
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] object-contain"
        />
        {/* Background Dotted Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="bg-green-100 w-40 h-40 sm:w-56 sm:h-56 rounded-full absolute top-8 sm:top-12 left-4 sm:left-10 blur-2xl opacity-40"></div>
          <div className="bg-green-200 w-32 h-32 sm:w-40 sm:h-40 rounded-full absolute bottom-0 right-4 sm:right-10 blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default CablinkHero;