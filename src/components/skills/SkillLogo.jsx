import React from 'react';

const SkillLogo = ({ name, Icon }) => {
  return (
    <div className="flex flex-col items-center m-4 group">
      <Icon
        className="w-16 h-16 text-cream mb-2 transform transition-transform duration-200 group-hover:scale-110"
        title={name}
      />
      <p className="text-sm text-center">{name}</p>
    </div>
  );
};

export default SkillLogo;