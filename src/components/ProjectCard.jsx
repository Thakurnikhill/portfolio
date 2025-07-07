/* global gtag */

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg overflow-hidden card-hover group w-full p-4 sm:p-6 md:p-8"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-secondary-light dark:text-secondary-dark">
          {project.title}
        </h3>
        
        <p className="text-tertiary-light dark:text-tertiary-dark mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-4">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Track GitHub link click
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', {
                    'event_category': 'project',
                    'event_label': `${project.title}_github_click`
                  });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-tertiary-light dark:text-tertiary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
            >
              <FaGithub className="text-lg" />
              <span>Code</span>
            </motion.a>
          )}
          
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Track live demo link click
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', {
                    'event_category': 'project',
                    'event_label': `${project.title}_live_link_click`
                  });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-tertiary-light dark:text-tertiary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
            >
              <FaExternalLinkAlt className="text-lg" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
