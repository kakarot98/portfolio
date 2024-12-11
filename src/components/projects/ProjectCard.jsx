import React from 'react';

const ProjectCard = ({ title, description, languages, repoLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {languages.map((lang, index) => (
          <span
            key={index}
            className="bg-cream text-gray-800 px-2 py-1 rounded-full text-xs"
          >
            {lang}
          </span>
        ))}
      </div>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline font-semibold"
      >
        View Repository &rarr;
      </a>
    </div>
  );
};

export default ProjectCard;