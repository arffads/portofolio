'use client';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaWhatsapp,
} from "react-icons/fa";
// import StarBackground from "./StarBackgorund";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-16 px-6 bg-black transition-colors"
      data-aos="fade-up"
    >
      {/* <StarBackground /> */}
      <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
        Let`s Work Together! 
      </h2>

      <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md space-y-6 transition-colors">
        <p className="text-gray-100 dark:text-gray-200 text-center">
          Feel free to reach out to me via email or WhatsApp. I’ll try to respond as soon as possible!
        </p>

        <div className="flex flex-col gap-6 text-gray-800 dark:text-gray-100">
          {/* Email */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-gray-100">ariffad0196@gmail.com</span>
            </div>
            <a
              href="mailto:ariffad0196@gmail.com"
              className="flex items-center justify-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 w-36 px-3 py-1 rounded transition transform duration-200"
            >
              Email Me <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span className="text-gray-100">+62 895-0960-1672</span>
            </div>
            <a
              href="https://wa.me/6289509601672?text=Halo%20saya%20sudah%20melihat%20portofolio%20anda,%20dan%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-white bg-green-600 hover:bg-green-700 hover:scale-105 w-36 px-3 py-1 rounded transition transform duration-200"
            >
              WhatsApp <FaWhatsapp className="text-sm" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700 text-2xl" />
              <span className="text-base text-gray-100">LinkedIn</span>
            </div>
            <a
              href="https://www.linkedin.com/in/arif-fadillah-833832158/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-white bg-blue-700 hover:bg-blue-800 hover:scale-105 w-36 px-3 py-1 rounded transition transform duration-200"
            >
              LinkedIn <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <FaGithub className="text-black dark:text-white text-2xl" />
              <span className="text-base text-gray-100">GitHub</span>
            </div>
            <a
              href="https://github.com/arffads"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-white bg-black hover:bg-gray-800 hover:scale-105 w-36 px-3 py-1 rounded transition transform duration-200"
            >
              GitHub <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
