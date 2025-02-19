import React from 'react'
import { motion } from 'framer-motion'

const baseCardClass = "shadow-md rounded-lg p-6 mb-4 cursor-pointer transition-transform duration-300";
const hoverEffect = "hover:shadow-xl";
const dimensionClass = "w-72 h-50";

function ExperienceCard({ experience, onClick, isModalOpen }) {
  const { title, company, position, dates } = experience;

  return (
    <motion.div
      className={`${baseCardClass} ${hoverEffect} ${dimensionClass} flex flex-col bg-secondary justify-between`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-semibold mb-1 text-text">{title}</h3>
      <p className="text-md font-medium text-text">{company}</p>
      <p className="text-sm text-gray-400">{position}</p>
      <p className="text-sm text-gray-400">{dates}</p>
      {!isModalOpen && (
        <motion.p
          className="text-sm text-accent italic mt-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Click to view more details
        </motion.p>
      )}
    </motion.div>
  )
}

export default ExperienceCard