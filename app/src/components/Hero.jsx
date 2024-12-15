import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import pic from "../Images/pic.jpg"; // Adjust the path based on your project structure
import pic1 from "../Images/pic1.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-cover bg-center text-white h-screen py-12 md:py-20 relative overflow-hidden"
      style={{ backgroundImage: `url(${pic})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center h-full">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your license to a <span className="text-yellow-400">car-free</span> life
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Our app makes it easy to navigate cities by bus, train, foot, and bike
          </p>
          <a
            href="#home"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg"
          >
            Download App
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1.5 }}
        >
          <img
            src={pic1}
            alt="App Preview"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
};

export default HeroSection;
