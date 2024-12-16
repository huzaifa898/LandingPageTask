import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importing React Icons

const FooterSection = () => {
  return (
    <footer className="bg-[#FDF7F1] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section in the First Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
              Hungry for more? <br />
              Sign up for our <span className="text-green-600">newsletter!</span>
            </h2>
            <p className="text-gray-600">
              Secret features. Partnerships. Mobility trends. <br /> All that, and more.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center space-x-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full border border-gray-300 shadow-md w-80 md:w-96 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700">
              Sign up
            </button>
          </div>
        </div>

        {/* Footer Links Section in the Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">HELLO</h3>
            <ul className="space-y-2">
              <li>Regions</li>
              <li>APIs</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>Our vision</li>
              <li>
                Team <span className="text-green-600 font-bold">•</span>
              </li>
              <li>
                Jobs <span className="text-green-600 font-bold">•</span>
              </li>
              <li>Privacy</li>
              <li>Terms of use</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">PARTNERS</h3>
            <ul className="space-y-2">
              <li>Cities & Transit Agencies</li>
              <li>Mobile Payments</li>
              <li>Bikes & Scooters</li>
              <li>Ridehail & Carshare</li>
              <li>Data</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-green-900 mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li>info@cablink.app</li>
              <li className="flex space-x-3">
                <a href="#inta" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5 text-gray-700 hover:text-green-600" />
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5 text-gray-700 hover:text-green-600" />
                </a>
                <a href="#facebook" aria-label="Facebook">
                  <FaFacebook className="w-5 h-5 text-gray-700 hover:text-green-600" />
                </a>
                <a href="#linkden" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5 text-gray-700 hover:text-green-600" />
                </a>
              </li>
              <li>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700">
                  Get the app <span role="img" aria-label="mobile">📱</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
