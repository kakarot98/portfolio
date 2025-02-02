import React from 'react'
import { motion } from 'framer-motion'

const baseCardClass = "bg-white shadow-md rounded-lg p-6 mb-4 cursor-pointer transition-transform duration-300";
const hoverEffect = "hover:shadow-xl";
const dimensionClass = "w-72 h-60";

function ExperienceCard({ experience, onClick }) {
  const { title, company, position, dates } = experience;
  
  return (
    <motion.div
    className={`${baseCardClass} ${hoverEffect} ${dimensionClass} flex flex-col justify-between`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-md font-medium text-gray-700">{company}</p>
      <p className="text-sm text-gray-600">{position}</p>
      <p className="text-sm text-gray-500">{dates}</p>
    </motion.div>
  )
}

export default ExperienceCard