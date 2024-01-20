import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({ toggleSideBar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { id, text, path, icons } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={id}
            onClick={toggleSideBar}
            end
          >
            <span className='icon'>{icons}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
