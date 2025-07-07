// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { personalInfo, projects } from "../data/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-primary-shade-light dark:bg-primary-shade-dark">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-tertiary-light dark:text-tertiary-dark max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience. More projects are on the way, so stay tuned!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg font-semibold hover:bg-accent-shade-light dark:hover:bg-accent-shade-dark transition-colors duration-200"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
