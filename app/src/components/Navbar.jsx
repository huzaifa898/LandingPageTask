import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg font-bold text-black">
              <span className="text-green-600">CAB</span>LINK
            </a>
          </div>

          {/* Links Section */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-black font-medium">
              Features
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-black font-medium">
              Why Us
            </a>
            <a href="#solution" className="text-gray-700 hover:text-black font-medium">
              Solution
            </a>
            <a href="#story" className="text-gray-700 hover:text-black font-medium">
              Story
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-black font-medium">
              Testimonials
            </a>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="text-gray-700 hover:text-black font-medium flex items-center">
              English
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
