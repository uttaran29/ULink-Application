import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">ULinks</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2025 ULinks. All rights reserved to Uttaran.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="mailto:sarkaruttaran2004@gmail.com" className="hover:text-gray-200">
            <HiOutlineMail size={24} />
          </a>

          <a href="https://x.com/Uttaransarkar29?t=EcVYBERxoT1N1hzle_FncQ&s=09" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/_uttaran_?igsh=MTZzMGR2emwxaDJjdg==" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/uttaran-sarkar/" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;