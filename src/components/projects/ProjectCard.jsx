// src/components/projects/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Reusable style variables
const baseCardClass = "bg-white shadow-md rounded-lg p-6 transition-transform duration-300";
const hoverClass = "hover:shadow-xl";
const dimensionClass = "w-72 h-80"; // Set consistent width and height for each card
const statClass = "text-sm font-medium text-text";

const ProjectCard = ({ project }) => {
  const { repo, description, stars, forks, watchers, link, language, languageColor } = project;

  return (
    <motion.div
      className={`${baseCardClass} ${hoverClass} ${dimensionClass} flex flex-col bg-secondary justify-between`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{repo}</h3>
        <p className="text-gray-300 mb-4">{description || "No description available."}</p>
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
        <div className="flex items-center justify-center space-x-4">
          <motion.div className={statClass} whileHover={{ scale: 1.1 }}>
            ⭐ {stars}
          </motion.div>
          <motion.div className={statClass} whileHover={{ scale: 1.1 }}>
            🍴 {forks}
          </motion.div>
          <motion.div className={statClass} whileHover={{ scale: 1.1 }}>
            👀 {watchers}
          </motion.div>
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center text-accent font-semibold transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Visit Repository &rarr;
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
