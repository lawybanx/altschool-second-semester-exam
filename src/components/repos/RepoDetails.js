import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { fetchRepoDetails } from '../../utils/fetchRepo';
import Spinner from '../layouts/Spinner';

const RepoDetails = () => {
  const { name, login } = useParams();
  const [repo, setRepo] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepoDetails(name, login).then(data => {
      setRepo(data);
      setLoading(false);
    });
  }, [name, login]);

  return (
    <>
      <Helmet>
        <title>Repo Details</title>
        <meta name='description' content='Github repositories details page ' />
        <link rel='canonical' href='/repo_details' />
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='container'>
          <button
            className='btn btn-dark my-1'
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <div className='repo-details'>
            <div className='repo-details-header'>
              <div className='repo-details-header-left col-md-3'>
                <img src={repo.owner?.avatar_url} alt='' />
              </div>
              <div className='repo-details-header-right'>
                <h2>Username: {repo.owner?.login}</h2>
                <p>Repo name: {repo.name}</p>
                <p>Description: {repo.description}</p>
              </div>
            </div>
            <div className='repo-details-body'>
              <div className='repo-details-body-item'>
                <p>Forks: {repo.forks_count}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Stars: {repo.stargazers_count}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Watchers: {repo.watchers_count}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Language: {repo.language}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Homepage: {repo.homepage}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>License: {repo.license?.name}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Open Issues: {repo.open_issues}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Default Branch: {repo.default_branch}</p>
              </div>
              <div className='repo-details-body-item'>
                <p>Network Count: {repo.network_count}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RepoDetails;
