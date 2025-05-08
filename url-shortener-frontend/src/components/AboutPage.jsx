import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            About <span >ULinks</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transform your long URLs into powerful, trackable links that drive results.
          </p>
          <span className="block mt-6 text-2xl font-semibold text-blue-600 animate-pulse">
            🚀 Create. Customize. Track. Grow.
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full shadow">
                <FaLink className="text-3xl text-blue-600" />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-800">Simple URL Shortening</h2>
            </div>
            <p className="text-gray-600">
              Create short, memorable URLs effortlessly. Our intuitive interface makes link management quick and painless.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-green-100 rounded-full shadow">
                <FaShareAlt className="text-3xl text-green-600" />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-800">Powerful Analytics</h2>
            </div>
            <p className="text-gray-600">
              Dive deep into performance metrics — track clicks, locations, devices, and referral sources in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-purple-100 rounded-full shadow">
                <FaEdit className="text-3xl text-purple-600" />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-800">Enhanced Security</h2>
            </div>
            <p className="text-gray-600">
              Your links are safe with us. We use industry-standard encryption and secure protocols to protect your data.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-100">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-red-100 rounded-full shadow">
                <FaChartLine className="text-3xl text-red-600" />
              </div>
              <h2 className="ml-4 text-2xl font-bold text-gray-800">Fast and Reliable</h2>
            </div>
            <p className="text-gray-600">
              Enjoy blazing-fast redirects and 99.99% uptime thanks to our scalable and robust infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
