import React from 'react'


const baseCardClass = "shadow-md rounded-lg p-6  max-w-md mx-auto transition-transform duration-300";
const hoverClass = "hover:scale-105 hover:shadow-xl";
const dimensionClass = "w-full h-80"; // Customize width and height as needed

function Card({ institution, degree, duration, coursework }) {
    return (
        <div className={`${baseCardClass} ${hoverClass} ${dimensionClass} flex flex-col justify-between bg-secondary`}>
          <h3 className="text-xl font-semibold mb-2 text-text">{institution}</h3>
          <p className="text-md font-medium text-text">{degree}</p>
          <p className="text-sm mb-4 text-text">{duration}</p>
          <h4 className="text-sm font-semibold mb-2 text-text text-left">Relevant Courses: <a className='text-sm font-light text-text text-left'>{coursework.join(', ')}</a></h4>
          
        </div>
      );
}

export default Card