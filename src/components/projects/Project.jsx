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

      try {
        const headers = {};

        // Access the GitHub token from environment variables
        // const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

        // if (githubToken) {
        //   headers.Authorization = `token ${githubToken}`;
        // }

        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100`,
          { headers }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const repos = await response.json();

        // Sort repositories by stargazers_count in descending order
        const sortedRepos = repos.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );

        // Take top 4 repositories
        const topRepos = sortedRepos.slice(0, 4);

        // For each repo, fetch languages used
        const projectsWithLanguages = await Promise.all(
          topRepos.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url, { headers });
            const languagesData = await languagesResponse.json();
            const languages = Object.keys(languagesData);

            return {
              title: repo.name,
              description: repo.description,
              languages: languages.length > 0 ? languages : ['N/A'],
              repoLink: repo.html_url,
            };
          })
        );

        setProjects(projectsWithLanguages);
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
            key={index}
            title={project.title}
            description={project.description}
            languages={project.languages}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
