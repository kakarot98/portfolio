// src/components/Project.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  const githubUsername = 'kakarot98';

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(false);
      console.log(import.meta.env.BASE_URL)

      let response
      try {
        if (process.env.NODE_ENV === 'production') {
          response = await fetch(`${import.meta.env.BASE_URL}data/pinnedRepos.json`);
          console.log('This is the production environment');
        } else {
          response = await fetch('src/data/pinnedRepos.json');
          console.log('This is not the production environment');
        }
        
        if (!response.ok) {
          throw new Error('Failed to fetch pinned repos');
        }
        const data = await response.json();
        
      
        
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [githubUsername]);

  if (loading) {
    return (
      <section className="py-8 px-4 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-text">Projects</h2>
        <p className="text-center text-text">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 px-4 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-text">Projects</h2>
        <p className="text-center text-red-500">
          Failed to load projects. Please try again later.
        </p>
      </section>
    );
  }


  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
