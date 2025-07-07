// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { personalInfo, education, workExperience } from "../data/data";

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary-shade-light dark:bg-primary-shade-dark">
            <div className="container-width px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-tertiary-light dark:text-tertiary-dark max-w-2xl mx-auto">
                        {personalInfo.description}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Education</h3>
                        <div className="space-y-6">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-white dark:bg-primary-dark p-6 rounded-lg shadow-md relative z-10">
                                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                                    <p className="text-accent-light dark:text-accent-dark mb-2">{edu.university}</p>
                                    <p className="text-sm text-tertiary-light dark:text-tertiary-dark mb-3">
                                        {edu.startDate} - {edu.endDate}
                                    </p>
                                    <ul className="space-y-1">
                                        {edu.description.map((item, index) => (
                                            <li key={index} className="text-sm text-tertiary-light dark:text-tertiary-dark">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
                        <div className="space-y-6">
                            {workExperience.map((work) => (
                                <div key={work.id} className="bg-white dark:bg-primary-dark p-6 rounded-lg shadow-md relative z-10">
                                    <h4 className="text-xl font-semibold mb-2">{work.title}</h4>
                                    <p className="text-accent-light dark:text-accent-dark mb-2">{work.company}</p>
                                    <p className="text-sm text-tertiary-light dark:text-tertiary-dark mb-3">
                                        {work.startDate} - {work.endDate}
                                    </p>
                                    <ul className="space-y-1">
                                        {work.description.map((item, index) => (
                                            <li key={index} className="text-sm text-tertiary-light dark:text-tertiary-dark">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;