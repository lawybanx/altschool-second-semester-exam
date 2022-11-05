import { useEffect, useState } from 'react';
import RepoPaginate from './RepoPaginate';
import { fetchRepo } from '../../utils/fetchRepo';
import Spinner from '../layouts/Spinner';
import { Helmet } from 'react-helmet-async';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepo('lawybanx').then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Repo list</title>
        <meta name='description' content='My Github repo list page' />
        <link rel='canonical' href='/repos_list' />
      </Helmet>
      {isLoading ? <Spinner /> : <RepoPaginate repos={repos} />}
    </>
  );
};

export default RepoList;
