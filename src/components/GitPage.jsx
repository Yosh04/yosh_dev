// src/components/GitHubProjects.js
import React, { useEffect, useState } from 'react';

const GitHubProjects = () => {
  const username = 'Yosh04'
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching repositories: {error.message}</p>;

  return (
    <div>
      <h2>{username}'s GitHub Projects</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProjects;
