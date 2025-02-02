import React from 'react'


const baseCardClass = "bg-white shadow-md rounded-lg p-6 mb-4 transition-transform duration-300";
const hoverClass = "hover:scale-105 hover:shadow-xl";
const dimensionClass = "w-72 h-80"; // Customize width and height as needed

function Card({ institution, degree, duration, coursework }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4" style={{ backgroundColor: '#f5f5f5' }}>
          <h3 className="text-xl font-semibold mb-2">{institution}</h3>
          <p className="text-md font-medium">{degree}</p>
          <p className="text-sm text-gray-600 mb-4">{duration}</p>
          <h4 className="text-sm font-semibold mb-2">Relevant Coursework:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {coursework.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
}

export default Card