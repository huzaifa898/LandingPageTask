import React from "react";
import train1 from "../Images/train1.png"; // Replace with your actual image path
import com from "../Images/com.png"
import eco from "../Images/eco.png"
const CustomCard = () => {
  const cards = [
    {
      title: "Smart Mobility Platform",
      description:
        "Easily access various transport options in one app for a seamless experience.",
      features: [
        "Compare multiple ride services",
        "Choose the best option based on price and convenience",
        "Enjoy quick, hassle-free travel",
        "Real-time tracking and updates",
      ],
      image: train1, // Assign the first image
    },
    {
      title: "Affordable and Convenient",
      description:
        "Compare prices, vehicles, and transport modes to make the best decisions.",
      features: [
        "Find the most affordable options",
        "Choose from a range of vehicles",
        "Save time with quick comparisons",
        "Maximize savings on every ride",
      ],
     image:com  // Assign the second image
    },
    {
      title: "Eco-Friendly Urban Travel",
      description:
        "Experience smarter, sustainable transportation designed for today's travelers.",
      features: [
        "Choose from eco-friendly transport options",
        "Tailored for convenience and efficiency",
        "Reduce your carbon footprint while traveling",
      ],
     image: eco, // Assign the third image
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-[360px] h-[550px] bg-gradient-to-b from-green-200 to-green-300 rounded-3xl shadow-lg overflow-hidden mx-2 my-4"
            >
              {/* Rotated Top Section on the Right */}
              <div
                className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] bg-white rotate-45"
                style={{ zIndex: 1 }}
              >
                {/* Image inside the Rotated Background */}
                <div className="absolute inset-4 mt-10 flex justify-left items-center">
                  <img
                    src={card.image} // Dynamically load the image
                    alt="Icon"
                    className="w-[60px] h-[60px] -rotate-45"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-8 mt-20 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h2>
                <p className="text-black-600 mb-4">{card.description}</p>
                <ul className="list-disc list-inside text-left text-black-600 space-y-2 mx-auto w-fit">
                  {card.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomCard;
