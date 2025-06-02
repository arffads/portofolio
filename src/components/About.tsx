'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import StarBackground from "./StarBackgorund";

const images = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
];


const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white px-4 sm:px-6 py-10 sm:py-16 flex items-center justify-center"
      data-aos="fade-right"
    >
      <StarBackground />
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Gambar dengan animasi */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-xs sm:max-w-sm aspect-square rounded-xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[currentImage]}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full"
              >
                <Image
                  src={images[currentImage]}
                  alt="About me"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="rounded-xl object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Info Data Diri */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
            <span className="text-blue-500">Arif</span> <br className="mb-5" />Fadillah
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm sm:text-base text-white px-2">
            {[
              ['Age', '24 Years'],
              ['Address', 'Tangerang Selatan, Indonesia'],
              ['Phone', '+62 895-0960-1672'],
              ['Email', 'ariffad0196@gmail.com'],
              ['Nationality', 'Indonesian'],
              ['Languages', 'Indonesian, English'],
              ['Freelance', 'Available'],
              ['Hobby', 'Sports & Music'],
            ].map(([label, value]) => (
              <li key={label} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-blue-500 text-lg">•</span>
                <span>
                  <span className="text-gray-400">{label}:</span> <strong>{value}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
