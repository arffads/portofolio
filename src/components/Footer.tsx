'use client';

import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/arffads" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a href="www.linkedin.com/in/arif-fadillah-833832158" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.instagram.com/fadss32_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-300 transition" />
          </a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Arif Fadillah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
