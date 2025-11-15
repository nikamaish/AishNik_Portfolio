import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Intro = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center pb-10">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold 
             mt-32 mb-10 
             text-center md:text-left 
             px-4 sm:px-6">
                Hi, I’m{" "}
                <span className="animated-name">Aishwarya Nikam</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-3xl md:text-4xl text-gray-300 mb-10"
            >
                Full Stack Developer
            </motion.h2>

            <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glow-btn inline-block mb-10"
            >
                Download Resume
            </motion.a>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex space-x-10 text-3xl "
            >

                <a
                    href="https://www.linkedin.com/in/𝐀𝐢𝐬𝐡𝐰𝐚𝐫𝐲𝐚-𝐍𝐢𝐤𝐚𝐦-8175221b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/nikamaish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://medium.com/@aishTechie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                >
                    <FaMedium />
                </a>
            </motion.div>
        </section>
    );
};

export default Intro;
