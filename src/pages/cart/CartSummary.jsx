import cartSelector from '../../features/cart/cartSelector';
import { useSelector } from 'react-redux';
import './cart_summary.scss';

const CartSummary = () => {
  const totalPrice = useSelector(cartSelector.totalPrice);
  const totalItems = useSelector(cartSelector.totalItems);

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>
      <div className="cart-summary__row">
        <span>Quantity: </span>
        <span>{totalItems}</span>
      </div>

      <div className="cart-summary__row">
        <span>Subtotal: </span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <div className="cart-summary__row">
        <span>Shipping: </span>
        <span>Free</span>
      </div>

      <hr className="cart-summary__divider" />

      <div className="cart-summary__total">
        <span>Total: </span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <button className="cart-summary__checkout">Proceed to Checkout</button>
    </aside>
  );
};

export default CartSummary;
