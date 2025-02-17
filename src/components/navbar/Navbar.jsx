// src/components/navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-500'
      : 'hover:text-blue-500 transition-colors duration-200';

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleNavClick = () => {
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleSidebarDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className='mb-10'>
      <motion.header
        className="fixed top-0 left-0 right-0 bg-navBg shadow-md p-2 py-3 md:py-5 z-50"
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-6">

          <Link to="" className="flex-1 flex">
            <h1 className="text-2xl font-bold text-text">Profile</h1>
          </Link>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className="hidden md:flex space-x-4 font-medium">
            <NavLink to="education" className={navLinkClass}>Education</NavLink>
            <NavLink to="experience" className={navLinkClass}>Experience</NavLink>
            <NavLink to="project" className={navLinkClass}>Projects</NavLink>
            <NavLink to="skills" className={navLinkClass}>Skills</NavLink>
            <NavLink to="funzone" className={navLinkClass}>Fun Zone</NavLink>

          </nav>
        </div>
      </motion.header>


      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.nav
              className="fixed top-0 left-0 z-50 w-2/3 max-w-xs h-full bg-navBg p-4 pt-16 shadow-lg"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleSidebarDragEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col space-y-4 font-medium">
                <li>
                  <NavLink to="education" className={navLinkClass} onClick={handleNavClick}>
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="experience" className={navLinkClass} onClick={handleNavClick}>
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink to="project" className={navLinkClass} onClick={handleNavClick}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="skills" className={navLinkClass} onClick={handleNavClick}>
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="funzone" className={navLinkClass} onClick={handleNavClick}>
                    Fun Zone
                  </NavLink>
                </li>

              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
