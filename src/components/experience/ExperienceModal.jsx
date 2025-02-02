import React from 'react';
import {motion} from 'framer-motion'

const ExperienceModal = ({ isOpen, onClose, experience }) => {
  if (!isOpen || !experience) return null;

  const { title, company, position, dates, details } = experience;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-md font-medium text-gray-700">{company}</p>
        <p className="text-sm text-gray-600 mb-4">{position} | {dates}</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;
