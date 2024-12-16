import React from "react";
import { motion } from "framer-motion";
import hero from "../Images/hero.png"; // Replace with your hero image path

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* Animated Background Image */}
      <motion.div
        initial={{ y: "100%", scale: 1.2 }} // Start from bottom with slight zoom
        whileInView={{ y: "0%", scale: 1 }} // Animate up with zoom effect
        viewport={{ once: true }} // Trigger only once
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom", // Align background to bottom
        }}
      ></motion.div>

      {/* Content Section - Positioned at Tower Start */}
      <motion.div
        className="absolute w-full text-center px-4 top-[9%] -translate-y-1/2 z-10" // Fine-tune top position
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          All Your Rides, One App –{" "}
          <span className="text-green-500">CABLINK</span> Does It All
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Our app makes it easy to navigate cities by bus, train, foot, and bike.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#download"
          className="inline-block mt-6 px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Download CABLINK
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
