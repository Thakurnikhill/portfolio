/* global gtag */

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload } from "react-icons/fa";
import { personalInfo } from "../data/data";

const Contact = () => {
  const handleEmailClick = (e) => {
    e.preventDefault(); // Prevent default link behavior, which means it won't navigate away from the page

    // Track email click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'contact',
        'event_label': 'email_contact_click'
      });
    }

    const email = personalInfo.email;
    const mailtoLink = `mailto:${email}`;

    // Try to open mailto link
    window.location.href = mailtoLink;  // This will open the user's default email client

    /* // If the mailto link fails, show an alert
    // This is a fallback in case the mailto link does not work
    // This can happen if the user does not have an email client set up
    // or if the browser does not support mailto links */


    // Fallback: Copy email to clipboard after a short delay

    if (!window.location.href.startsWith('mailto:')) {
      setTimeout(() => {
        // Attempt to copy email to clipboard
        if (!navigator.clipboard) {
          alert(`Please email me at: ${email}`);
        } else {
          navigator.clipboard.writeText(email).then(() => {
            alert(`Email copied to clipboard: ${email}`);
          }).catch(() => {
            alert(`Please email me at: ${email}`);
          });
        }
      }, 100);
    }
  };

  const handlePhoneClick = (e) => {
    e.preventDefault(); // Prevent default link behavior, which means it won't navigate away from the page  

    // Track phone click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'contact',
        'event_label': 'phone_click'
      });
    }

    const phone = personalInfo.phone;
    const telLink = `tel:${phone}`;
    // Try to open tel link
    window.location.href = telLink;  // This will open the user's default phone app

    /* // If the tel link fails, show an alert
    // This is a fallback in case the tel link does not work
    // This can happen if the user does not have a phone app set up
    // or if the browser does not support tel links */
    // Fallback: Copy phone number to clipboard after a short delay
    if (!window.location.href.startsWith('tel:')) {
      setTimeout(() => {
        // Attempt to copy phone number to clipboard
        if (!navigator.clipboard) {
          alert(`Please call me at: ${phone}`);
        } else {
          navigator.clipboard.writeText(phone).then(() => {
            alert(`Phone number copied to clipboard: ${phone}`);
          }).catch(() => {
            alert(`Please call me at: ${phone}`);
          });
        }
      }, 100);
    }
  };

  const handleResumeDownload = () => {
    // Track resume download
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        'event_category': 'resume',
        'event_label': 'resume_download'
      });
    }
    
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Mishal_K_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      onClick: handleEmailClick
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: personalInfo.location,
      href: null
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      onClick: handlePhoneClick
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.socialLinks.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, href: personalInfo.socialLinks.twitter, label: "Twitter" }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent-light/20 dark:border-accent-dark/20 shadow-lg">
                <img
                  src={personalInfo.photo}
                  alt="MSL Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-light dark:bg-primary-dark border-4 border-accent-light/20 dark:border-accent-dark/20 shadow-lg rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-tertiary-light dark:text-tertiary-dark max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you'd like to connect!
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 justify-items-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center">
                      <info.icon className="text-xl text-accent-light dark:text-accent-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-tertiary-light dark:text-tertiary-dark font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          {...(info.onClick ? { onClick: info.onClick } : {})}
                          className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200 text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary-light dark:text-secondary-dark text-lg">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg p-4 sm:p-6 md:p-8 max-w-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>

              <div className="space-y-6">
                <p className="text-tertiary-light dark:text-tertiary-dark mb-6">
                  Connect with me on social media to stay updated with my latest projects and insights.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        // Track social media click
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'click', {
                            'event_category': 'social',
                            'event_label': `${social.label.toLowerCase()}_contact_click`
                          });
                        }
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center space-y-2 p-4 bg-accent-light/5 dark:bg-accent-dark/5 rounded-lg hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 bg-accent-light/10 dark:bg-accent-dark/10 rounded-lg flex items-center justify-center group-hover:bg-accent-light group-hover:text-white dark:group-hover:bg-accent-dark dark:group-hover:text-white transition-all duration-200">
                        <social.icon className="text-xl text-accent-light dark:text-accent-dark group-hover:text-white transition-colors duration-200" />
                      </div>
                      <span className="text-sm font-medium text-secondary-light dark:text-secondary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-200">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-accent-light/10 to-accent-dark/10 dark:from-accent-light/5 dark:to-accent-dark/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-tertiary-light dark:text-tertiary-dark mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center items-center px-8 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-semibold hover:bg-accent-shade-light dark:hover:bg-accent-shade-dark transition-colors duration-200"
                >
                  <FaEnvelope className="mr-2" />
                  Send me an email
                </motion.a>

                <motion.button
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center items-center px-8 py-3 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark dark:hover:text-white transition-colors duration-200 cursor-none"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 