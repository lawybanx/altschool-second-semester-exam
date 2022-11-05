import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className='spinner' role='status'>
      <Oval
        height={80}
        width={80}
        color='#000'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#333'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;
