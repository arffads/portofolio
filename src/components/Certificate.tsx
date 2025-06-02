import Image from "next/image";
// import StarBackground from "./StarBackgorund";

const certificates = [
  {
    title: "Uji Kompetensi Pemrograman",
    issuer: "Universitas Pamulang",
    image: "/license/BNSP.jpg",
    link: "https://mylsp.unpam.ac.id/login",
  },
  {
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    image: "/license/soliddicoding.png",
    link: "https://www.dicoding.com/certificates/EYX42Q8DOZDL",
  },
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    image: "/license/awsdc.png",
    link: "https://www.dicoding.com/certificates/72ZDOJRQ9XYW",
  },
  {
    title: "Problem Solving - Intermediate",
    issuer: "HackerRank",
    image: "/license/problemsolving.png",
    link: "https://www.hackerrank.com/certificates/521bf03c3f72",
  },
  {
    title: "SQL - Advanced",
    issuer: "HackerRank",
    image: "/license/sqladvanced.png",
    link: "https://www.hackerrank.com/certificates/517a08d11c8a",
  },
  {
    title: "Go Language - Basic",
    issuer: "HackerRank",
    image: "/license/gobasic.png",
    link: "https://www.hackerrank.com/certificates/e4ed7213c0e8",
  },
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="py-16 px-4 md:px-8 bg-black text-white" data-aos="fade-left">
      {/* <StarBackground /> */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Certificates & Licenses</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A collection of verified certificates showcasing my learning journey and expertise in development and IT.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-blue-700 transition-transform duration-300 transform hover:scale-[1.02]"
          >
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={cert.image}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-400">{cert.title}</h3>
              <p className="text-sm text-gray-400">Issued by {cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
