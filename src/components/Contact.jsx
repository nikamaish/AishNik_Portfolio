import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://aish-nik-portfolio-backend.vercel.app/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message Sent Successfully ");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ");
      }
    } catch (error) {
      setStatus("Server Error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 py-16 sm:px-6 sm:py-20 bg-[#0d0d15]/70"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 sm:mb-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent"
      >
        Let’s Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#11111a] p-6 sm:p-10 rounded-2xl shadow-[0_0_30px_#06b6d4] max-w-3xl w-full"
      >
        <p className="text-gray-300 text-lg mb-8 text-center">
          I’m always open to discussing new projects, ideas, or opportunities.
          Drop me a message, I’ll get back to you soon!
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm sm:text-base">
              {/* here text-sm is for small devices which comes under 640px and sm:text-base is for devices above 640px, it overrides text-sm */}
              <FaEnvelope className="text-white text-2xl " />
              <a href="mailto:aishwaryanikam13@gmail.com">
                aishwarya.nikam.work@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-white text-2xl" />
              <a
                href="https://www.linkedin.com/in/𝐀𝐢𝐬𝐡𝐰𝐚𝐫𝐲𝐚-𝐍𝐢𝐤𝐚𝐦-8175221b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-white text-2xl" />
              <a
                href="https://github.com/nikamaish"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white text-2xl" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-[90%] sm:w-full bg-[#0f0f15] border border-[#1e1e2a] text-white p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
            // here w-[85%] is for small devices which comes under 640px and sm:w-full is for devices above 640px, it overrides w-[85%], then md:w-full can be used for devices above 768px if needed and lg:w-full for devices above 1024px if needed
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-[90%] sm:w-full bg-[#0f0f15] border border-[#1e1e2a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-[90%] sm:w-full bg-[#0f0f15] border border-[#1e1e2a] text-white p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-[90%] sm:w-full py-3 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-white font-semibold rounded-lg hover:shadow-[0_0_30px_#9333ea] transition-all duration-300"
            >
              Send Message
            </motion.button>

            {status && (
              <p className="text-center mt-2 text-cyan-300">{status}</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;