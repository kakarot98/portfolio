import React from 'react'
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import { NavLink } from 'react-router-dom';
import Project from '../projects/Project';

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'text-blue-500 '
    : 'hover:text-blue-500 transition-colors duration-200'

const Navbar = () => {
  

  return (
    <div className='flex flex-row flex-wrap justify-between items-center bg-slate-200 shadow-md p-2'>
      <h1 className='text-2xl ml-20 font-semibold hover:text-blue-500'><NavLink to={``}>Profile</NavLink></h1>
      <div className='p-4 mr-20 flex flex-row justify-start gap-4 font-medium' >
        <ul><NavLink to={'education'} className={navLinkClass}>Education</NavLink></ul>
        <ul><NavLink to={'experience'} className={navLinkClass}>Experience</NavLink></ul>
        <ul><NavLink to={`project`} className={navLinkClass}>Projects</NavLink></ul>
        <ul><NavLink to={'skills'} className={navLinkClass}>Skills</NavLink></ul>
      </div>
    </div>
  )
}

export default Navbar