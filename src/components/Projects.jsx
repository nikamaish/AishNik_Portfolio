import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "GuildMasters Website",
    description:"A community-centric gaming website providing events, insights, and game discovery. Includes secure SignUp/Login using Node.js, Express.js, and MongoDB Atlas, deployed on Firebase and Render.",
    stack: ["React", "Node.js", "Firebase", "Express", "JWT", "MongoDB"],
    img: "/skills/GuildMasters.JPG",
    live: "https://gaming-hub-98328.web.app",
    github: "https://github.com/nikamaish/GuildMasters",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern animated portfolio using React, Tailwind CSS, Framer Motion, and Swiper components.",
    stack: ["React", "Tailwind", "Framer Motion","Swiper","Vercel"],
    img: "/skills/Portfolio.JPG",
    live: "https://aishwarya-nikam-portfolio.vercel.app",
    github: "https://github.com/nikamaish/AishNik_Portfolio",
  },
  {
    title: "VisualMaster Website",
    description:"A real-time stock and crypto market visualization platform designed for beginners. Features interactive graphs, Vercel deployment, and MongoDB Atlas for secure user data management.",
    stack: ["React", "Node.js","Express", "MongoDB", "Chart.js", "JWT", "API", "Vercel"],
    img: "/skills/VisualMaster.JPG",
    live: "https://visual-master.vercel.app",
    github: "https://github.com/nikamaish/visual_master",
  },

   {
    title: "Social Networking API",
    description:"A high-performance backend API built using Node.js, Express, and MongoDB, designed for social communication and user interaction. It supports features like user profiles, authentication, posts, reactions, and scalable data modeling. The API focuses on security, clean architecture, and optimized database operations, making it ideal for building social media platforms or community-driven applications",
    stack: ["Node.js", "Express", "MongoDB", "RESTful API", "JWT", "Mongoose"],
    img: "/skills/API.png",
    live: null,
    github: "https://github.com/nikamaish/SocialNetworkingApi-",
  },

  {
    title: "BeatFarm Music Platform",
    description:"A music streaming platform where users can listen to songs, purchase beats, and explore artists. The platform supports three roles: User, Admin, and Artist. Admins can add artists, upload tracks, manage requests, and control subscription plans. The project follows MVC Architecture and is built with Node.js, Express, React, Tailwind CSS, MongoDB, and JWT authentication for a secure and scalable system.",
    stack:["React.js", "Tailwind CSS","Node.js", "Express.js", "MongoDB", "JWT", "MVC Architecture"],
    img:"/skills/Beatfarm.JPG",
    live:null,
    github:"https://github.com/nikamaish/beatFarm",
  },

  {
    title:  "Quiz Web App",
    description:"A secure online quiz platform with MediasTream-based camera and microphone monitoring. Includes timed quizzes, warning alerts, and continuous proctoring for exam integrity." ,
    stack:["Javascript","DOM Manipulation","HTML","CSS","GitHub Pages","Media"],
    img:"/skills/QuizApp.png",
    live:"https://nikamaish.github.io/Quiz_App",
    github:"https://github.com/nikamaish/Quiz_App"
  },
  
  {
    title:  "WebCraft Editor",
    description:"An interactive coding playground to create shapes and solve coding challenges. Designed for learners and developers with real-time feedback in a fun, practical environment.",
    stack:["Javascript", "DOM Manipulation","HTML","CSS","GitHub Pages"],
    img:"/skills/WebCraftEditor.png",
    live:"https://nikamaish.github.io/HTML_CSS_Editor",
    github:"https://github.com/nikamaish/HTML_CSS_Editor"
  },

  {
    title:  "E-Signature Studio",
    description:"A digital signature generator built using Canvas. Allows users to draw, customize, and download their signatures easily for professional use.",
    stack:["Javascript", "DOM Manipulation","HTML","CSS","Canvas","GitHub Pages"],
    img:"/skills/Signature.png",
    live:"https://nikamaish.github.io/Signature_App",
    github:"https://github.com/nikamaish/Signature_App"
  }

];

 const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#0d0d15]/70 text-white py-20 px-6">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 rounded-2xl p-5 shadow-lg 
           hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition 
           flex flex-col h-full justify-between"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
              <img src={project.img} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-auto">
              <a href={project.github} target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <FaGithub /> Code
              </a>
              {project.live && (
              <a href={project.live} target="_blank" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                Live <FaExternalLinkAlt />
              </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


export default Projects;