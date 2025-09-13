import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <img
        src={`https://skillicons.dev/icons?i=${skills}`}
        alt={title}
        className="w-full h-auto"
      />
    </div>
  );
};

export default SkillCategory;
