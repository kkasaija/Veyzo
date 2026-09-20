import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cartSelector from '../../../features/cart/cartSelector';
import './navbar.scss';

function Navbar() {
  const totalItems = useSelector(cartSelector.totalItems);

  const navLinks = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Products', path: '/products' },
    { id: 3, label: 'Categories', path: '/categories' },
    { id: 4, label: 'About', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar__logo"
      >
        ReactCommerce
      </Link>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="navbar__item"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <Link
          to="/cart"
          className="button button--secondary"
        >
          Cart ({totalItems})
        </Link>

        <Link
          to="/login"
          className="button"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
