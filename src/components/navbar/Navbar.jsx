import React from 'react'
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import { Link } from 'react-router-dom';
import Project from '../projects/Project';

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap justify-between items-center bg-slate-200 shadow-md p-2'>
      <h1 className='text-2xl ml-20 font-semibold hover:text-blue-500'><Link to={``}>Profile</Link></h1>
      <div className='p-4 mr-20 flex flex-row justify-start gap-4 font-medium' >
        <ul><Link to={'education'} className="hover:text-blue-500">Education</Link></ul>
        <ul><Link to={'experience'} className="hover:text-blue-500">Experience</Link></ul>
        <ul><Link to={`project`} className="hover:text-blue-500">Projects</Link></ul>
        <ul><Link to={'skills'} className="hover:text-blue-500">Skills</Link></ul>
      </div>
    </div>
  )
}

export default Navbar