export const fetchRepo = async username => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=created:asc&per_page=100`
  );
  const data = await response.json();
  return data;
};

export const fetchRepoDetails = async (repoName, username = 'lawybanx') => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repoName}`
  );
  const data = await response.json();
  return data;
};
