import { motion } from "framer-motion";

const GitHubStats = () => {
    return (
        <section
            id="github"
            className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-[#0d0d15]/70 py-20 px-6"
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold mb-10 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent"
            >
                My GitHub Stats 🚀
            </motion.h2>

            {/* wrapper that places children side-by-side on md+ and stacked on small screens */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
            >
                {/* languages card (first) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="w-[340px] md:w-[500px] rounded-xl  shadow-[0_0_25px_#06b6d4]"
                >
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikamaish&layout=compact&theme=radical&title_color=06b6d4&text_color=ffffff&bg_color=0a0a0f"
                        alt="Top Languages"
                        className="w-full h-auto block"
                    />
                </motion.div>

                {/* streak card (second) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-[340px] md:w-[400px] rounded-xl  shadow-[0_0_25px_#9333ea]"
                >
                    <img
                        src="https://streak-stats.demolab.com?user=nikamaish&theme=radical&ring=9333ea&fire=06b6d4&currStreakLabel=ffffff&background=0a0a0f"
                        alt="GitHub Streak"
                        className="w-full h-auto block"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default GitHubStats;
