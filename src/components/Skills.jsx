import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

const skillsData = {
    programming: [
        { name: "Java", icon: "src/assets/skills/java.svg" },
        { name: "JavaScript", icon: "src/assets/skills/javascript.svg" },
    ],
    frameworks: [
        { name: "React JS", icon: "src/assets/skills/react.svg" },
        { name: "Tailwind CSS", icon: "../assets/skills/tailwind.svg" },
        { name: "Node.js", icon: "../assets/skills/node.svg" },
        { name: "Express.js", icon: "/assets/skills/express.png" },
        { name: "Spring Core", icon: "/assets/skills/spring.png" },
        { name: "Supabase", icon: "/assets/skills/supabase.png" },
        { name: "JSP Servlet", icon: "/assets/skills/jsp.png" },
    ],
    databases: [
        { name: "MongoDB", icon: "/assets/skills/mongodb.png" },
        { name: "MySQL", icon: "/assets/skills/mysql.png" },
    ],
    tools: [
        { name: "Git", icon: "/assets/skills/git.png" },
        { name: "GitHub", icon: "/assets/skills/github.png" },
        { name: "VS Code", icon: "/assets/skills/vscode.png" },
        { name: "Postman", icon: "/assets/skills/postman.png" },
        { name: "Docker", icon: "/assets/skills/docker.png" },
        { name: "MongoDB Atlas", icon: "/assets/skills/atlas.png" },
        { name: "MongoDB Compass", icon: "/assets/skills/compass.png" },
    ],
    platforms: [
        { name: "Firebase", icon: "/assets/skills/firebase.png" },
        { name: "Vercel", icon: "/assets/skills/vercel.png" },
        { name: "Render", icon: "/assets/skills/render.png" },
        { name: "Flowise", icon: "/assets/skills/flowise.png" },
    ]
};

const categories = [
    { id: "programming", label: "Programming", icon: <FaCode /> },
    { id: "frameworks", label: "Frameworks", icon: <FaServer /> },
    { id: "databases", label: "Databases", icon: <FaDatabase /> },
    { id: "tools", label: "Tools", icon: <FaTools /> },
    { id: "platforms", label: "Platforms", icon: <FaCloud /> }
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
                        className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-300 ${activeCategory === cat.id
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
            <div className="bg-[#0d0d15]/60 border border-white/10 rounded-2xl p-10 max-w-5xl mx-auto shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
                    >
                        {skillsData[activeCategory].map((skill, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center bg-[#1a1a25] hover:bg-[#1f1f2e] transition-all duration-300 rounded-full px-5 py-3 shadow-[0_0_10px_rgba(147,51,234,0.2)]"
                            >
                                <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2" />
                                <p className="text-sm font-medium">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
