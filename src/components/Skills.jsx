import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud, FaLaptopCode } from "react-icons/fa";

const skillsData = {
  programming: [
    { name: "Java", icon: "skills/java.svg" },
    { name: "JavaScript", icon: "skills/javascript.svg" },
  ],
  frontend: [
    { name: "React JS", icon: "skills/react.svg" },
    { name: "Tailwind CSS", icon: "skills/tailwindcss.svg" },
    { name: "Bootstrap", icon: "skills/bootstrap.svg" },
    { name: "HTML5", icon: "skills/html5.svg" },
    { name: "CSS3", icon: "skills/css3.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "skills/nodejs.svg" },
    { name: "Express.js", icon: "skills/express.svg" },
    { name: "Spring Core", icon: "skills/spring.svg" },
    { name: "Hibernate", icon: "skills/hibernate.svg" },
  ],
  databases: [
    { name: "MongoDB", icon: "skills/mongodb.svg" },
    { name: "Supabase", icon: "skills/supabase.svg" },
    { name: "MySQL", icon: "skills/mysql.svg" },
  ],
  tools: [
    { name: "Git", icon: "skills/git.svg" },
    { name: "GitHub", icon: "skills/github.svg" },
    { name: "VS Code", icon: "skills/vscode.svg" },
    { name: "Postman", icon: "skills/postman.svg" },
    { name: "Docker", icon: "skills/docker.svg" },
    { name: "MongoDB Atlas", icon: "skills/mongodb-atlas.svg" },
    { name: "MongoDB Compass", icon: "skills/mongodb-atlas.svg" },
  ],
  platforms: [
    { name: "Firebase", icon: "skills/firebase.svg" },
    { name: "Vercel", icon: "skills/vercel.svg" },
    { name: "Render", icon: "skills/render.jpg" },
    { name: "Flowise", icon: "skills/flowise.jpg" },
  ],
};

const categories = [
  { id: "programming", label: "Programming", icon: <FaCode /> },
  { id: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
  { id: "backend", label: "Backend", icon: <FaServer /> },
  { id: "databases", label: "Databases", icon: <FaDatabase /> },
  { id: "tools", label: "Tools", icon: <FaTools /> },
  { id: "platforms", label: "Platforms", icon: <FaCloud /> },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  return (
    <section id="skills" className="min-h-screen bg-[#0d0d15]/70 text-white px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-white shadow-[0_0_20px_#9333ea]"
                : "bg-[#0d0d15] text-gray-400 hover:text-white"
            }`}
          >
            {cat.icon}
            {cat.label}
          </motion.button>
        ))}
      </div>

      <div className="bg-[#0d0d15]/60 border border-white/10 rounded-2xl p-10 max-w-6xl mx-auto shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
          >
            {skillsData[activeCategory].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center w-36 h-32 sm:w-40 sm:h-36 
                           bg-gradient-to-br from-[#e0f7fa] via-[#f0faff] to-[#dbeafe]
                           hover:from-[#c7f9ff] hover:to-[#e3f2fd]
                           border border-cyan-200 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]
                           transition-all duration-300"
              >
                <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-3" />
                <p className="text-gray-800 font-semibold text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
