import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <header>
    <nav>
      <h1>BookStore</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Category">Category</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavMenu;
