import { NavLink } from 'react-router-dom';
import user from '../user.png';

const NavMenu = () => (
  <header>
    <nav className="container-center">
      <div className="left">
        <h1 className="logo">BookStore CMS</h1>
        <ul className="menu-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Category">Category</NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <img src={user} alt="imgs" width="40px" className="user" />
      </div>
    </nav>
  </header>
);

export default NavMenu;
