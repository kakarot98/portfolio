import React from 'react'

function ExperienceCard({ experience, onClick }) {
  const { title, company, position, dates } = experience;
  
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 mb-4 cursor-pointer hover:bg-#edf5eb transition-colors duration-200 "
      onClick={onClick}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-md font-medium text-gray-700">{company}</p>
      <p className="text-sm text-gray-600">{position}</p>
      <p className="text-sm text-gray-500">{dates}</p>
    </div>
  )
}

export default ExperienceCard