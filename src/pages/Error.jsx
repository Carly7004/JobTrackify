import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>
          Ohh! <span>Page Not Found</span>
        </h3>
        <p>We can't seem to find the page your're looking for </p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
