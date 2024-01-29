import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h3>
        <Link to='/'>
          <i className='fas fa-code'></i> MyRepos
        </Link>
      </h3>
      <ul>
        <a
          href='https://github.com/lawybanx'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        <a
          href='https://portfolio-lawybanx.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Portfolio
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
