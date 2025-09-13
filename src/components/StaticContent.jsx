import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile_glasses.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StaticContent = () => {
  return (
    <motion.div
      className="static-content w-[95%] mt-8 md:w-[23%] max-h-fit flex flex-col items-center md:m-20 justify-center flex-shrink-0 p-4 md:h-screen bg-secondary rounded-lg shadow-md mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img src={profile} alt="Profile" className="mt-10 w-40 h-auto shadow-md rounded-full" 
        transition={{ duration: 0.3 }} />
      <motion.div
        className="font-semibold text-2xl mt-4 m-2 text-text"
      >
        Hrushikesh Mohanty
      </motion.div>
      <motion.div
        className="mt-2 text-center text-sm italic text-text"
      >
        Software Engineer | Front-end Designer & Developer | Writer | Doodler
      </motion.div>

      <div className="mt-6 flex flex-col items-center">
        <p className="mb-2 text-sm text-text">
          You can reach me through:
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/kakarot98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors duration-200 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hrushikeshmohanty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors duration-200 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>


    </motion.div>

  )
}

export default StaticContent