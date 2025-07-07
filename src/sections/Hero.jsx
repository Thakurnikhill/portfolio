/* global gtag */

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/data";
import AnimatedBackground from "../components/AnimatedBackground";

const Hero = () => {

    const handleEmailClick = (e) => {
        e.preventDefault();
        const email = personalInfo.email;
        const mailtoLink = `mailto:${email}`;

        // Try to open mailto link
        window.location.href = mailtoLink;

        // Fallback: Copy email to clipboard after a short delay
        if(!window.location.href.includes("mailto:")) {
            setTimeout(() => {
                navigator.clipboard.writeText(email).then(() => {
                    alert(`Email copied to clipboard: ${email}`);
                }).catch(() => {
                    alert(`Please email me at: ${email}`);
                });
            }, 100);
        }
        // Note: The above fallback is a workaround in case the mailto link doesn't work
        // directly, which can happen in some browsers or environments.
    };

    const socialIcons = [
        { icon: FaGithub, href: personalInfo.socialLinks.github, title: "GitHub", color: "hover:text-secondary-light dark:hover:text-secondary-dark", isExternal: true },
        { icon: FaLinkedin, href: personalInfo.socialLinks.linkedin, title: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-600", isExternal: true },
        { icon: FaTwitter, href: personalInfo.socialLinks.twitter, title: "Twitter", color: "hover:text-sky-500 dark:hover:text-sky-500", isExternal: true },
        { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, title: "Email", color: "hover:text-red-500 dark:hover:text-red-500", isExternal: false, onClick: handleEmailClick }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <AnimatedBackground />

            <div className="container-width px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-tertiary-light dark:text-tertiary-dark mb-4"
                        >
                            Hello, I'm
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            {personalInfo.name}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl mb-8"
                        >
                            <TypeAnimation
                                sequence={[
                                    "I'm a Developer",
                                    1000,
                                    "I'm an Engineer",
                                    1000,
                                    "I'm an Educator",
                                    1000,
                                    "I'm a Problem Solver",
                                    1000
                                ]}
                                repeat={Infinity}
                                className="gradient-text dark:gradient-text font-semibold"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-lg text-tertiary-light dark:text-tertiary-dark mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            {personalInfo.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-semibold hover:bg-accent-shade-light dark:hover:bg-accent-shade-dark transition-colors duration-200"
                            >
                                Get In Touch
                            </motion.a>

                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-colors duration-200"
                            >
                                View Projects
                            </motion.a>
                        </motion.div>

                        {/* Social Links and Resume Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex justify-center lg:justify-start space-x-6 mt-8"
                        >
                            {/* Social Links */}
                            {socialIcons.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    onClick={(e) => {
                                        // Track social media click
                                        if (typeof gtag !== 'undefined') {
                                            gtag('event', 'click', {
                                                'event_category': 'social',
                                                'event_label': `${social.title.toLowerCase()}_hero_click`
                                            });
                                        }
                                        // Call original onClick if it exists
                                        if (social.onClick) {
                                            social.onClick(e);
                                        }
                                    }}
                                    title={social.title}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`text-2xl text-tertiary-light dark:text-tertiary-dark transition-colors duration-200 ${social.color}`}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}

                            {/* Resume Button */}
                            <motion.a
                                href={personalInfo.resume}
                                // download="Mishal-KR-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    // Track resume view
                                    if (typeof gtag !== 'undefined') {
                                        gtag('event', 'click', {
                                            'event_category': 'resume',
                                            'event_label': 'resume_view'
                                        });
                                    }
                                }}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-xl flex items-center justify-center w-20 h-5 rounded-lg bg-tertiary-light dark:bg-tertiary-dark text-primary-light dark:text-primary-dark font-semibold shadow-md transition-colors duration-200 hover:bg-accent-light dark:hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
                                style={{ minWidth: '2.5rem', minHeight: '1.5rem' }}
                                title="View Resume"
                            >
                                <span className="text-sm font-bold">Resume</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent-light/20 to-accent-shade-light/20 dark:from-accent-dark/20 dark:to-accent-shade-dark/20 rounded-full flex items-center justify-center relative overflow-hidden"
                            >
                                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-accent-light/20 dark:border-accent-dark/20 shadow-lg">
                                    <img
                                        src={personalInfo.photo}
                                        alt="MSL Profile Picture"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;