import React from 'react';

const ProfileButton = ({ setActiveComponent, handleNavClick }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button onClick={() => handleNavClick('About')} className="w-full h-full px-4 py-2">
        <span className="text-lg font-medium text-text">Profile</span>
      </button>
    </div>
  );
};

export default ProfileButton;
