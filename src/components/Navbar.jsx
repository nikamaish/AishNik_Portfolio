import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "skills", label: "Skills" },
        { id: "work", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "certifications", label: "Certifications" },
        { id: "contact", label: "Contact" },
    ];

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 bg-[#0d0d15]/70 backdrop-blur-md border-b border-white/10"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                <motion.h1
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
                    onClick={() => handleScroll("home")}
                    whileHover={{ scale: 1.05 }}
                >
                    Aishwarya
                </motion.h1>

                <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            onClick={() => handleScroll(link.id)}
                            className="relative cursor-pointer hover:text-accent transition"
                        >
                            {link.label}
                            <motion.span
                                className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gradient-to-r from-primary to-accent"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            ></motion.span>
                        </li>
                    ))}
                </ul>

                <div
                    className="md:hidden text-gray-300 text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {isOpen && (
                <motion.ul
                    className="md:hidden flex flex-col items-center bg-[#0d0d15]/95 border-t border-white/10 py-6 space-y-4 text-gray-200 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            onClick={() => handleScroll(link.id)}
                            className="cursor-pointer hover:text-accent transition"
                        >
                            {link.label}
                        </li>
                    ))}
                </motion.ul>
            )}
        </motion.nav>
    );
};

export default Navbar;
