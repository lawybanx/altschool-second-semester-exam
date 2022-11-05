import { useState } from 'react';
import RepoPaginate from './RepoPaginate';
import { fetchRepo } from '../../utils/fetchRepo';
import Spinner from '../layouts/Spinner';

const SearchRepo = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const username = e.target.username.value;
    fetchRepo(username).then(data => {
      setRepos(data);
      setLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='container'>
        <h2>Enter a valid username</h2>
        <input
          className='my-1 p lead'
          type='text'
          placeholder='Search for a repo'
          name='username'
        />
        <button className='btn btn-dark m-1 ' type='submit'>
          Search
        </button>
      </form>
      {isLoading ? <Spinner /> : <RepoPaginate repos={repos} />}
    </>
  );
};

export default SearchRepo;
