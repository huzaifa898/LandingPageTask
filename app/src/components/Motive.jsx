import React from "react";
import section  from "../Images/section.jpeg"; // Replace with the actual path to your image

const NewSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fast, Reliable, and Affordable Rides at Your Fingertips
          </h2>
          <p className="text-gray-600 mb-6">
            Are you tired of juggling between different apps to find the best ride for you?{" "}
            <span className="text-green-600 font-semibold">Cablink</span> brings the best ride-hailing solution. 
            This app smartly offers all available rides and endless transport possibilities. You can easily choose 
            the best ride in Saudi Arabia that suits your preferences. You can compare the prices of different rides 
            and connect with different rides. It is the best platform where transport meets convenience.
          </p>
          <p className="text-gray-600">
            <span className="text-green-600 font-semibold">Cablink</span> integrates various ride platforms in one 
            place, enabling you to compare prices, discounts, and ride availability in real-time. Multi-platform 
            connectivity and convenience in travel planning provide you with a unique experience. The app presents 
            you with platforms that meet safety standards with live tracking.{" "}
            <span className="text-green-600 font-semibold">Cablink</span> saves smart riders time and money every day. 
            You find the deals & discounts that are unbeatable. Find everything for booking rides in Saudi Arabia in 
            one app. Download the app and enjoy an affordable ride at your fingertips.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={section}
            alt="Illustration showing affordable rides"
            className="rounded-xl shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default NewSection;
