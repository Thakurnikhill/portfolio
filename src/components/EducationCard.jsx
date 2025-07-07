// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg overflow-hidden card-hover w-full p-4 sm:p-6 md:p-8"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={education.image} 
          alt={education.university}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-secondary-light dark:text-secondary-dark">
          {education.degree}
        </h3>
        
        <p className="text-lg font-semibold text-accent-light dark:text-accent-dark mb-2">
          {education.university}
        </p>
        
        <p className="text-sm text-tertiary-light dark:text-tertiary-dark mb-4">
          {education.startDate} - {education.endDate}
        </p>
        
        <ul className="space-y-2">
          {education.description.map((item, idx) => (
            <li key={idx} className="text-sm text-tertiary-light dark:text-tertiary-dark flex items-start">
              <span className="text-accent-light dark:text-accent-dark mr-2 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default EducationCard;
