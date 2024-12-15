import React from 'react';
import { FaMobileAlt, FaWallet, FaTasks, FaLeaf } from 'react-icons/fa';

const WhyChooseCablink = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Cablink?</h2>
        <p className="text-gray-600 mb-8">
          Discover smarter, faster, and more affordable travel with Cablink. Compare, connect, and ride seamlessly
          using our all-in-one platform designed for convenience and sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
            <FaMobileAlt className="text-green-900 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Smart Mobility Platform</h3>
            <p className="text-gray-600">
              Access multiple ride-hailing services in one app for quick and convenient travel options.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
            <FaWallet className="text-green-900 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Affordable and Convenient</h3>
            <p className="text-gray-600">
              Compare prices, vehicles, and transportation modes to save time and money.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
            <FaTasks className="text-green-900 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Integrated Travel Management</h3>
            <p className="text-gray-600">
              Manage all your travel tasks from a single platform with diverse options.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
            <FaLeaf className="text-green-900 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-green-900">Sustainable Solutions</h3>
            <p className="text-gray-600">
              Enjoy smarter, eco-friendly transportation tailored for modern urban travelers in Saudi Arabia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCablink;
