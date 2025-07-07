// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "../data/data";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "skills", label: "Skills" },
        { to: "projects", label: "Projects" },
        { to: "contact", label: "Contact" },
    ];

    const linkProps = {
        spy: true,
        smooth: true,
        offset: -64, // We can adjust this based on the navbar height
        duration: 500,
        activeClass: "text-accent-light dark:text-accent-dark",
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="container-width px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <Link to="home" smooth={true} duration={500}>
                        <motion.div
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={personalInfo.logoTransparent}
                                alt="MSL Logo"
                                className="h-8 w-8 md:h-10 md:w-10"
                            />
                            <h1 className="text-xl font-bold gradient-text dark:gradient-text">
                                {personalInfo.name}
                            </h1>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                {...linkProps}
                                className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            className="p-2 rounded-lg hover:bg-primary-shade-light dark:hover:bg-primary-shade-dark transition-colors"
                        >
                            {isNavOpen ? (
                                <AiOutlineClose size={24} />
                            ) : (
                                <AiOutlineMenu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={isNavOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-primary-light dark:bg-primary-dark border-t border-primary-shade-light dark:border-primary-shade-dark"
            >
                <div className="container-width px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsNavOpen(false)}
                            {...linkProps}
                            className="block hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
