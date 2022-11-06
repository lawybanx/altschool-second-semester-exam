import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page</title>
        <meta
          name='description'
          content='Page not Found'
        />
        <link rel='canonical' href='/*' />
      </Helmet>
      <section className='container'>
        <h1 className='x-large text-primary'>
          <i className='fas fa-exclamation-triangle' /> Page Not Found
        </h1>
        <p className='large'>Sorry, this page does not exist</p>
      </section>
    </>
  );
};

export default NotFound;
