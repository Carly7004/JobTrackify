import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
            Banjo four dollar toast shaman actually art party. Tonx ethical
            farm-to-table unicorn pinterest. Cardigan tilde marfa, praxis
            distillery man braid jawn unicorn neutral milk hotel hella occupy
            bushwick.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};
export default Landing;
