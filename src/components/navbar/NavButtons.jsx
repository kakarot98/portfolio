import React from 'react';

const NavButtons = ({ activeLink, handleNavClick, navLinkClass }) => {
  return (
    <nav className="hidden md:flex font-medium w-full h-full">
      <button onClick={() => handleNavClick('Education')} className={navLinkClass('Education')}>Education</button>
      <button onClick={() => handleNavClick('Experience')} className={navLinkClass('Experience')}>Experience</button>
      <button onClick={() => handleNavClick('Projects')} className={navLinkClass('Projects')}>Projects</button>
      <button onClick={() => handleNavClick('Skills')} className={navLinkClass('Skills')}>Skills</button>
      <button onClick={() => handleNavClick('Fun Zone')} className={navLinkClass('Fun Zone')}>Fun Zone</button>
    </nav>
  );
};

export default NavButtons;
