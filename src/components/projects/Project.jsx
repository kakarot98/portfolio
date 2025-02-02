// src/components/Project.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
  const githubUsername = 'kakarot98';

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(false);

      const endpoint = 'https://api.github.com/graphql';
      const query = `
      {
        user(login: "${githubUsername}") {
          pinnedItems(first: 4, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                stargazerCount
                forkCount
                url
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `;



      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const { data } = await response.json();

        if (!data || !data.user) {
          throw new Error('No data found for the specified user.');
        }

        const pinnedRepos = data.user.pinnedItems.nodes.map(repo => ({
          repo: repo.name,
          description: repo.description,
          stars: repo.stargazerCount,
          forks: repo.forkCount,
          link: repo.url,
          language: repo.primaryLanguage ? repo.primaryLanguage.name : null,
          languageColor: repo.primaryLanguage ? repo.primaryLanguage.color : null,
        }));







        
        console.log(pinnedRepos)

        setProjects(pinnedRepos);
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
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
        <p className="text-center">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 px-4 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
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
