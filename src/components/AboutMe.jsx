import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-20"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_#06b6d4]"
            >
                <img
                    //   src={profilePic}
                    alt="Aishwarya Nikam"
                    className="w-full h-full object-cover rounded-full border-4 border-primary"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 animate-pulse"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl text-center md:text-left"
            >
                <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                    A passionate <span className="text-primary font-semibold">Full Stack Developer </span>
                    skilled in the <span className="text-accent font-semibold">MERN</span> and
                    <span className="text-accent font-semibold"> Java</span> stacks, currently working as an
                    <span className="text-accent font-semibold"> Associate Software Engineer</span> at
                    <span className="text-primary font-semibold"> Tech Mahindra</span>.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                    I graduated with a degree in <span className="text-accent font-semibold">Information Technology </span>
                    from <span className="text-primary font-semibold">P.E.S Modern College of Engineering, Pune</span>.
                    I love exploring new technologies, building automation tools, and solving real-world problems through code.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                    I love exploring new technologies, building automation tools, and solving real-world problems through code.
                    Outside of work, I’m a <span className="text-accent font-semibold">Technophile and Gamer</span> who loves blending creativity with logic
                    whether it’s through code, design, or gameplay.
                </p>

                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 inline-block glow-btn"
                >
                    View My Work
                </motion.a>
            </motion.div>
        </section>
    );
};

export default AboutMe;
