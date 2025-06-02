'use client';
import { FaHtml5, FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSwagger, SiMysql, SiPostgresql, SiMongodb, SiSequelize, SiPostman } from "react-icons/si";
// import StarBackground from "./StarBackgorund";

const Skills = () => {
  const skills = [
  // FE
  { name: "HTML", icon: <FaHtml5 className="w-10 h-10 text-blue-500" /> },
  { name: "React", icon: <FaReact className="w-10 h-10 text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-blue-500" /> },
  { name: "Swagger UI", icon: <SiSwagger className="w-10 h-10 text-blue-500" /> },
  { name: "Wordpress", icon: <FaWordpress className="w-10 h-10 text-blue-500" /> },
  // BACKEND
  { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-blue-500" /> },
  { name: "Sequelize", icon: <SiSequelize className="w-10 h-10 text-blue-500" /> },
  { name: "Postman", icon: <SiPostman className="w-10 h-10 text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-blue-500" /> },
];

    const topSkills = skills.slice(0, 6);
    const bottomSkills = skills.slice(6, 12);

  return (
    <section
      id="skills"
      className="w-full min-h-screen text-gray-700 bg-black transition-colors duration-200 py-25"
    >
      {/* <StarBackground /> */}
      {/*className="text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 transition-colors duration-200 py-12" */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        My Skills
      </h2>

      {/* Bagian atas (fade-down) */}

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center mb-12"
        data-aos="fade-down"
      >
        {topSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="skill-diamond">
              <div className="skill-content">
                <div className="skill-diamond">
                  <div className="skill-content">
                    {skill.icon}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white font-medium text-center mt-2 py-5">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Bagian bawah (fade-up) */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center"
        data-aos="fade-up"
      >
        {bottomSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="skill-diamond">
              <div className="skill-content">
                <div className="skill-diamond">
                  <div className="skill-content">
                    {skill.icon}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white font-medium text-center mt-2 py-5">{skill.name}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Skills;
