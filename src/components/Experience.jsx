import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Tech Mahindra",
    role: "Associate Software Engineer",
    duration: "Dec 2024 – Present",
    description: [
      "Undergone through training in Web Development and Java Stack",
      "Acquired knowledge of Agile methodologies and software testing principles to deliver high-quality software.",
      "Leveraged cloud computing concepts through Google Cloud Platform (GCP)"
    ],
    technologies: ["Javascript", "Core Java", "Advance Java", "Servlet", "Spring Core", "Spring JDBC", "Spring JPA", "Spring MVC", "Spring Boot", "Agile Methodologies","MySQL", "Google Cloud Platform (GCP)"],
  },
  {
    company: "Techonsy Software Pvt. Ltd.",
    role: "Software Developer",
    duration: "Sept 2024 – Dec 2024",
    description: [
      "Engineered scheduled serverless functions in Supabase with cron jobs, automating twice-daily data extraction.",
      "Eliminated reliance on paid crawling services, achieving zero additional cost while ensuring secure and reliable data storage.",
      "Integrated LLMs to automate workflows, reducing manual effort and accelerating output generation.",
      "Deployed a Flowise chatbot with agents and RAG, automating query handling and delivering accurate, context-aware responses.",
      "Integrated and optimized backend APIs to enable seamless data exchange, improve system performance, and support scalable application functionality.",
      "Managed NG repository, ensuring compatibility and performance across mobile and web platforms."
    ],
    technologies: ["Supabase", "MERN", "Flowise", "Firecrawl", "LLMs", "RAG", "Web Scraping", "API Development", "Agile and Scrum", ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0d0d15]/70 text-white px-8 py-20 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="relative border-l-2 border-[#9333ea]/50 ml-6 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 md:ml-10 relative"
          >
            <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#9333ea] to-[#06b6d4] shadow-[0_0_15px_#06b6d4] flex items-center justify-center">
              <FaBriefcase className="text-white text-xs" />
            </div>

            <div className="bg-[#11111a] border border-[#9333ea]/30 rounded-2xl p-6 shadow-[0_0_15px_#06b6d4]/20 hover:shadow-[0_0_25px_#9333ea]/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#06b6d4]">
                {exp.role}
              </h3>
              <h4 className="text-xl text-[#9333ea]">{exp.company}</h4>
              <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>

              <ul className="list-disc list-inside text-gray-300 mb-3 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-[#1a1a25] border border-[#06b6d4]/40 text-[#06b6d4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
