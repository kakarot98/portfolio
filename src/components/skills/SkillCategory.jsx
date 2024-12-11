import React from 'react';
import SkillLogo from './SkillLogo';

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {skills.map((skill, index) => (
          <SkillLogo key={index} name={skill.name} Icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
