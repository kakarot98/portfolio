import React from 'react';
import { motion } from 'framer-motion';


const baseCardClass = "bg-cream shadow-md rounded-lg p-6 transition-transform duration-300";
const hoverClass = "hover:shadow-xl";
const dimensionClass = "w-72 h-80"; // Consistent width and height
const statClass = "text-sm font-medium text-gray-700";

const ProjectCard = ({ project }) => {
  const { repo, description, stars, forks, watchers = 0, link, language, languageColor } = project;


  return (
    <motion.div
    className={`${baseCardClass} ${hoverClass} ${dimensionClass} flex flex-col justify-between`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div>
      <h3 className="text-xl font-semibold mb-2">{repo}</h3>
      <p className="text-gray-700 mb-4">{description || "No description available."}</p>
    </div>
    <div>
      {language && (
        <span
          className="inline-block px-2 py-1 rounded-full text-xs font-bold mb-2"
          style={{ backgroundColor: languageColor || "#ccc" }}
        >
          {language}
        </span>
      )}
      <div className="flex items-center space-x-4">
        <motion.div className={statClass} whileHover={{ scale: 1.1 }}>
          ⭐ {stars}
        </motion.div>
        <motion.div className={statClass} whileHover={{ scale: 1.1 }}>
          🍴 {forks}
        </motion.div>
        {/* If you have watchers info available (or you can remove if not needed) */}
        <motion.div className={statClass} whileHover={{ scale: 1.1 }}>
          👀 {watchers}
        </motion.div>
      </div>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block text-center text-blue-500 font-semibold transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
      >
        Visit Repository &rarr;
      </motion.a>
    </div>
  </motion.div>
  );
};

export default ProjectCard;