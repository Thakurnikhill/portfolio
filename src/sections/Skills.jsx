// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { skills } from "../data/data";
import { additionalSkills } from "../data/data";

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Tools & Others", skills: skills.tools }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-tertiary-light dark:text-tertiary-dark max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools throughout my journey.
            Here's a breakdown of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-full relative z-10"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-start items-center mb-2">
                      <span className="font-medium text-secondary-light dark:text-secondary-dark">
                        {skill.name}
                      </span>
                      {/* <span className="text-sm text-tertiary-light dark:text-tertiary-dark">
                        {skill.level}%
                      </span> */}
                    </div>

                    <div className="w-full bg-primary-shade-light dark:bg-primary-shade-dark rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-accent-light to-accent-shade-light dark:from-accent-dark dark:to-accent-shade-dark rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Additional Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-accent-light/5 dark:bg-accent-dark/5 rounded-lg border border-accent-light/10 dark:border-accent-dark/10 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-200"
              >
                <span className="text-sm font-medium text-secondary-light dark:text-secondary-dark">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 