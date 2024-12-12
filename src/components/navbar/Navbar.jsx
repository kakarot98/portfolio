import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-row flex-wrap justify-between items-center bg-slate-200 shadow-md p-2'>
      <h1 className='text-2xl ml-20 font-semibold hover:text-blue-500'><Link to={``}>Profile</Link></h1>

      {/* Hamburger button for mobile screens */}
      <button
          onClick={toggleMenu}
          className="md:hidden block focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {/* Simple Hamburger Icon */}
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <div className="hidden md:flex md:flex-row md:space-x-4 font-medium">
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/education" className="hover:text-blue-500">Education</Link>
          <Link to="/experience" className="hover:text-blue-500">Experience</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/project" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>


      {/* <div className='p-4 mr-20 flex flex-row justify-start gap-4 font-medium' >
        <ul><Link to={'education'} className="hover:text-blue-500">Education</Link></ul>
        <ul><Link to={'experience'} className="hover:text-blue-500">Experience</Link></ul>
        <ul><Link to={`project`} className="hover:text-blue-500">Projects</Link></ul>
        <ul><Link to={'skills'} className="hover:text-blue-500">Skills</Link></ul>
      </div> */}

      {/* Mobile Menu (visible only if isOpen is true) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col space-y-4 font-medium">
          <Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/education" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/experience" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/skills" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/project" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar