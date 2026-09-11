import useCart from '../../../hooks/useCart';
import './navbar.scss';

function Navbar() {
  const { totalItems, cart, totalPrice } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar__logo">ReactCommerce</div>
      <ul className="navbar__links">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/products">products</a>
        </li>
        <li>
          <a href="/categories">categories</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>

      <div className="navbar__actions">
        <button className="button button--secondary">cart ({totalItems})</button>
        <button className="button">login</button>
      </div>
    </nav>
  );
}

export default Navbar;
