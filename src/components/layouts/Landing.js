import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>My Repos</h1>
            <p className='lead'>
              View and search for your Github repositories and users
            </p>
            <div className='buttons'>
              <Link to='/repos_list' className='btn btn-primary my-1'>
                View my Repos
              </Link>
              <Link to='/search' className='btn btn-light'>
                Search for Repos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
