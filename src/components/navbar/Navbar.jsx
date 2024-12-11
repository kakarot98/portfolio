import React from 'react'
import Contact from '../Contact';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import { Link } from 'react-router-dom';
import About from '../About';
import Project from '../projects/Project';

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap justify-between items-center bg-cream'>
      <h1 className='text-2xl font-semibold'>Profile</h1>
      <div className='p-4 flex flex-row justify-evenly gap-4 font-medium' >
        <ul><Link to={'/about'}>About</Link></ul>
        <ul><Link to={'/education'}>Education</Link></ul>
        <ul><Link to={'/experience'}>Experience</Link></ul>
        <ul><Link to={'/contact'}>Contact</Link></ul>
        <ul><Link to={`/project`}>Projects</Link></ul>        
        
        <ul><Link>Skills</Link></ul>
      </div>
    </div>
  )
}

export default Navbar