import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud, FaLaptopCode } from "react-icons/fa";

const skillsData = {
  programming: [
    { name: "Java", icon: "src/assets/skills/java.svg" },
    { name: "JavaScript", icon: "src/assets/skills/javascript.svg" },
  ],
  frontend: [
    { name: "React JS", icon: "src/assets/skills/react.svg" },
    { name: "Tailwind CSS", icon: "src/assets/skills/tailwindcss.svg" },
    { name: "Bootstrap", icon: "src/assets/skills/bootstrap.svg" },
    { name: "HTML5", icon: "src/assets/skills/html5.svg" },
    { name: "CSS3", icon: "src/assets/skills/css3.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "src/assets/skills/nodejs.svg" },
    { name: "Express.js", icon: "src/assets/skills/express.svg" },
    { name: "Spring Core", icon: "src/assets/skills/spring.svg" },
    { name: "Hibernate", icon: "src/assets/skills/hibernate.svg" },
  ],
  databases: [
    { name: "MongoDB", icon: "src/assets/skills/mongodb.svg" },
    { name: "Supabase", icon: "src/assets/skills/supabase.svg" },
    { name: "MySQL", icon: "src/assets/skills/mysql.svg" },
  ],
  tools: [
    { name: "Git", icon: "src/assets/skills/git.svg" },
    { name: "GitHub", icon: "src/assets/skills/github.svg" },
    { name: "VS Code", icon: "src/assets/skills/vscode.svg" },
    { name: "Postman", icon: "src/assets/skills/postman.svg" },
    { name: "Docker", icon: "src/assets/skills/docker.svg" },
    { name: "MongoDB Atlas", icon: "src/assets/skills/mongodb-atlas.svg" },
    { name: "MongoDB Compass", icon: "src/assets/skills/mongodb-atlas.svg" },
  ],
  platforms: [
    { name: "Firebase", icon: "src/assets/skills/firebase.svg" },
    { name: "Vercel", icon: "src/assets/skills/vercel.svg" },
    { name: "Render", icon: "src/assets/skills/render.jpg" },
    { name: "Flowise", icon: "src/assets/skills/flowise.jpg" },
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
    <section id="skills" className="min-h-screen bg-[#050510] text-white px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
        Technical Skills
      </h2>

      {/* Category Tabs */}
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

      {/* Skills Display */}
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
