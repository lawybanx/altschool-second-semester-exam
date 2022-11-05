import { Link } from 'react-router-dom';

const RepoItem = ({
  repo: {
    owner: { login, avatar_url },
    id,
    name,
    language,
    html_url,
    stargazers_count,
    watchers_count,
    forks_count,
  },
}) => {
  return (
    <>
      <div className='col-md-6 col-lg-4 p'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='col-md-3'>
              <img className='img-fluid' src={avatar_url} alt='' />
            </div>

            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>Language: {language}</p>
            <Link
              to={`/repo_details/${login}/${name}`}
              className='btn btn-dark my-1'
            >
              View Repository
            </Link>
            <a
              href={html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              <i className='fab fa-github'></i> View on Github
            </a>
          </div>
          <div className='card-footer'>
            <span className='badge badge-primary'>
              Stars: {stargazers_count}
            </span>
            <span className='badge badge-secondary'>
              Watchers: {watchers_count}
            </span>
            <span className='badge badge-success'>Forks: {forks_count}</span>
          </div>
        </div>
      </div>
    </>
  );
};

// {/* <div className='card' key={repo.id}>
//   <div className='card-body'>
//     <img className='round-img' src={repo.owner.avatar_url} alt='avatar' />
//     <h5 className='card-title'>{repo.name}</h5>
//     <p className='card-text'>{repo.description}</p>
//     <Link to={`/repo/${repo.id}`} className='btn btn-dark btn-sm my-1'>
//       View Repository
//     </Link>
//     <a href={repo.html_url} className='btn btn-primary'>
//       <i className='fab fa-github'></i> View on Github
//     </a>
//   </div>
// </div>; */}
export default RepoItem;
