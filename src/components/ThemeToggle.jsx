// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: darkMode ? 180 : 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-primary-shade-light dark:bg-primary-shade-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors duration-200 cursor-none"
        >
            {darkMode ? (
                <BsSun className="text-accent-light dark:text-accent-dark text-lg" />
            ) : (
                <BsMoon className="text-accent-light dark:text-accent-dark text-lg" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;