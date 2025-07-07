/* global gtag */

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data/data";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: personalInfo.socialLinks.github, label: "GitHub", title: "GitHub"},
    { icon: FaLinkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn", title: "LinkedIn"},
    { icon: FaTwitter, href: personalInfo.socialLinks.twitter, label: "Twitter", title: "Twitter"}
  ];

  return (
    <footer className="bg-primary-dark dark:bg-black text-white py-12">
    
      <div className="container-width px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <img 
                src={personalInfo.logoTransparent} 
                alt="MSL Logo" 
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <h3 className="text-2xl font-bold gradient-text">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-tertiary-dark">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-tertiary-dark hover:text-accent-dark transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Track social media click from footer
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'click', {
                        'event_category': 'social',
                        'event_label': `${social.label.toLowerCase()}_footer_click`
                      });
                    }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-accent-dark/20 rounded-lg flex items-center justify-center text-accent-dark hover:bg-accent-dark hover:text-white transition-all duration-200"
                  title={social.title}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider and Copyright Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-primary-shade-dark mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-tertiary-dark text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-tertiary-dark text-sm flex items-center">
              Thanks for Visiting! Stay Connected. <FaHeart className="text-red-500 mx-1" />  
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;