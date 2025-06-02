'use client';
import StarBackground from "./StarBackgorund";
type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    year: "April 2022 - Currently",
    role: "Freelance Web Developer",
    company: "JSsession Organization",
    description:
      "Assisted in building website and maintaining CMS-based websites.",
  },
  {
      year: "March 2024 - June 2025",
      role: "IT Support Officer",
      company: "PT.Mitra Koleksi Mandiri",
      description: "Manage assets office"
  },
  {
    year: "Mei 2023 - July 2023",
    role: "Backend Developer Internship",
    company: "Interiorqu.id",
    description:
      "Built scalable APIs using Node.js and Express. Optimized database performance with PostgreSQL.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center"
      data-aos="fade-left"
    >
      <StarBackground />
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-white">
        Experience
      </h2>

      <div className="relative border-l-2 border-blue-600 pl-8 max-w-4xl w-full space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Bullet */}
            <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              {/* Title & Company */}
              <h3 className="text-xl font-semibold text-white">
                {exp.role}{" "}
                <span className="text-blue-500">@ {exp.company}</span>
              </h3>

              {/* Year */}
              <span className="text-sm text-gray-400">{exp.year}</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-2 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
