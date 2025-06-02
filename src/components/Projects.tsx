'use client';
import Image from "next/image";
import StarBackground from "./StarBackgorund";

const Projects = () => {
  const projectList = [
    {
      title: "Aplikasi Pemesanan dengan QR Code",
      stack: "Built with : Express.js, MySQL, Next.js, React Native, etc.",
      image: "/images/AppPemesanan.jpg",
      link: "https://github.com/arffads/space",
    },
    {
      title: "Aplikasi Hafalan Surat Pendek - Backend Dev",
      stack: "Built with : Express.js, MySQL, Postman, etc.",
      image: "/images/AplikasiHatam.png",
      link: "https://github.com/arffads/pgalamanah-backend",
    },
    {
      title: "Nuansa Technology",
      stack: "Built with : Express.js(TS), MySQL, TypeORM, Swagger UI, etc.",
      image: "/images/Nuansa.png",
      link: "https://nuansatechnology.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-16 px-6 bg-black text-white"
      data-aos="fade-down"
    >
      <StarBackground />
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-14">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-blue-500/30 transition duration-300 flex flex-col"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-1">{project.stack}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
