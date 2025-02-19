import React from 'react';
import { motion } from 'framer-motion'

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
        className="bg-secondary rounded-lg shadow-lg w-full max-w-2xl max-h-[70vh] text-left overflow-y-auto p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button
          className="absolute top-4 right-4 text-text hover:text-accent"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-2 text-text">{title}</h2>
        <p className="text-md font-medium text-text">{company}</p>
        <p className="text-sm text-text mb-4">{position} | {dates}</p>
        <ul className="list-disc list-inside text-sm text-text space-y-2 leading-snug">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceModal;
