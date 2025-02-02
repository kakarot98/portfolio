// fetchPinnedRepos.js
import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const githubUsername = 'kakarot98';
const token = process.env.VITE_GITHUB_TOKEN; // This is read from your local .env file

if (!token) {
  console.error('Error: VITE_GITHUB_TOKEN is not defined in your environment.');
  process.exit(1);
}

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

async function fetchPinnedRepos() {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const { data } = await response.json();

    if (!data || !data.user) {
      throw new Error('No data returned for user');
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

    // Save the fetched data to a JSON file in the src/data folder
    fs.writeFileSync('public/data/pinnedRepos.json', JSON.stringify(pinnedRepos, null, 2));
    console.log('Pinned repositories data fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
  }
}

fetchPinnedRepos();
