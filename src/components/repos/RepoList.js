import { useEffect, useState } from 'react';
import RepoPaginate from './RepoPaginate';
import { fetchRepo } from '../../utils/fetchRepo';
import Spinner from '../layouts/Spinner';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepo('lawybanx').then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return <>{isLoading ? <Spinner /> : <RepoPaginate repos={repos} />}</>;
};

export default RepoList;
