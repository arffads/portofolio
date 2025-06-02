import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import StarBackground from "./StarBackgorund";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 bg-black text-gray-400 relative overflow-hidden"
      data-aos="fade-up"
    >
      <StarBackground />
      <FloatingIcons />
      {/* Gambar bulan berputar */}
      <div className="hidden md:flex md:w-1/2 p-6 justify-center items-center">
        <div className="w-90 h-90 relative rounded-full" data-aos="fade-right">
          <Image
            src="/images/moonss.png"
            alt="Rotating Moon"
            width={800}
            height={800}
            className="object-contain float-slow spin-slow" 
          />
        </div>
      </div>
      {/* Teks */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-700">Arif Fadillah</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-6">
           I`m a fresh graduate with freelance experience as a Fullstack Developer. and I`m also open to other opportunities in the IT field.
        </p>

        <div className="flex space-x-4">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Contact Me
          </a>
          <a
            href="/CV_Arif_Fadillah.pdf"
            className="flex items-center gap-2 border border-blue-700 text-blue-700 px-5 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition"
            download
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
