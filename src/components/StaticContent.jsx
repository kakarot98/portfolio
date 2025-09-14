import React from 'react'
import profile from '../assets/profile_glasses.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StaticContent = () => {
  return (
    <div
      className="static-content w-full max-h-fit flex flex-col items-center justify-center flex-shrink-0 p-4 h-full"
    >
      <img src={profile} alt="Profile" className="mt-10 max-w-xs h-auto shadow-md" />
      <div
        className="font-semibold text-2xl mt-4 m-2 text-text"
      >
        Hrushikesh Mohanty
      </div>
      <div
        className="mt-2 text-center text-sm italic text-text"
      >
        Software Engineer | Front-end Designer & Developer | Writer | Doodler
      </div>

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


    </div>

  )
}

export default StaticContent
