import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const certifications = [
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud Platform",
    date: "Jun 2025 to Jun 2028",
    logo: "skills/gcp.svg",
    link: "#",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2025 to Aug 2028",
    logo: "skills/aws.svg",
    link: "#",
  },
  {
    name: "Learn JAVA Programming - Beginner to Master",
    issuer: "Udemy",
    date: "Jun 2025",
    logo: "skills/udemy.png",
    link: "#",
  },
  {
    name: "SQL for Beginners: Learn SQL using MySQL and Database Design",
    issuer: "Udemy",
    date: "May 2025",
    logo: "skills/udemy.png",
    link: "#",
  },
  {
    name: "Agile Fundamentals: Scrum and Kanban",
    issuer: "Udemy",
    date: "Jan 2025",
    logo: "skills/udemy.png",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-[#0d0d15]/70 text-white py-20 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
        Certifications
      </h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={false}
        centeredSlides={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="max-w-6xl mx-auto"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 
              rounded-2xl p-8 flex flex-col items-center text-center 
              shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 
              h-[320px] justify-between"
            >
              <div className="flex flex-col items-center">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-20 h-20 mb-5 object-contain"
                />
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-[48px]">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-cyan-400 hover:text-cyan-300 text-sm underline"
                >
                  View Credential
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certifications;
