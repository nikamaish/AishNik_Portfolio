import { motion } from "framer-motion";
import Aish from "../assets/Aish.jpg";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-10 pt-10 pb-20 bg-[#0d0d15]/70 "
        >
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-[0_0_30px_#9333ea]"
            >
                <img
                    src={Aish}
                    alt="Aishwarya Nikam"
                    className="w-full h-full object-cover rounded-full border-4 border-[#9333ea]"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/20 to-[#06b6d4]/20 animate-pulse"></div> */}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl text-center md:text-left leading-relaxed"
            >
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-l from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent">
                    About Me
                </h2>

                <p className="text-gray-300 mb-4">
                    A passionate{" "}
                    <span className="text-[#06b6d4] font-semibold">Full Stack Developer</span>{" "}
                    skilled in the{" "}
                    <span className="text-[#9333ea] font-semibold">MERN</span> and{" "}
                    <span className="text-[#9333ea] font-semibold">Java</span> stacks, currently
                    working as an{" "}
                    <span className="text-[#06b6d4] font-semibold">Associate Software Engineer</span>{" "}
                    at <span className="text-[#9333ea] font-semibold">Tech Mahindra</span>.
                </p>

                <p className="text-gray-300 mb-4">
                    I graduated with a degree in{" "}
                    <span className="text-[#06b6d4] font-semibold">
                        Information Technology
                    </span>{" "}
                    from{" "}
                    <span className="text-[#9333ea] font-semibold">
                        P.E.S Modern College of Engineering, Pune
                    </span>
                    . I love exploring new technologies, building automation tools, and solving
                    real-world problems through code.
                </p>

                <p className="text-gray-300 mb-4">
                    Outside of work, I’m a{" "}
                    <span className="text-[#06b6d4] font-semibold">
                        technophile and gamer
                    </span>{" "}
                    who enjoys blending creativity with logic — whether it’s through code,
                    design, or gameplay.
                </p>

                {/* <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-white font-semibold rounded-full"
        >
          View My Work
        </motion.a> */}
            </motion.div>
        </section>
    );
};

export default AboutMe;
