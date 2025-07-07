// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { education, workExperience } from "../data/data";
import EducationCard from "../components/EducationCard";
import WorkExperienceCard from "../components/WorkExperienceCard";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-primary-shade-light dark:bg-primary-shade-dark">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-tertiary-light dark:text-tertiary-dark max-w-2xl mx-auto">
            I'm a passionate developer with a strong computer science foundation and a love for clean, purposeful code. From guiding future tech minds to building full-stack solutions, here's a glimpse into my journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 relative z-10"
        >
          {/* Education Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold mb-8 text-center"
            >
              Education
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} education={edu} index={index} />
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold mb-8 text-center"
            >
              Work Experience
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workExperience.map((work, index) => (
                <WorkExperienceCard key={work.id} work={work} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
