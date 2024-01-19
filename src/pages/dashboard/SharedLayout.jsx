import { Outlet } from 'react-router-dom';
import { Navbar, SmallSideBar, BigSideBar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
