import { useSelector, useDispatch } from 'react-redux';
import cartSelector from '../../features/cart/cartSelector';
import Button from '../../components/button/Button';
import './cart_summary.scss';
import { clearCart } from '../../features/cart/cartSlice';

const CartSummary = () => {
  const totalPrice = useSelector(cartSelector.totalPrice);
  const totalItems = useSelector(cartSelector.totalItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>

      <div className="cart-summary__row">
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="cart-summary__row">
        <span>Subtotal</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <div className="cart-summary__row">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <hr className="cart-summary__divider" />

      <div className="cart-summary__total">
        <span>Total</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <div className="cart-summary__actions">
        <Button>Proceed to Checkout</Button>

        <Button
          variant="danger"
          onClick={handleClearCart}
        >
          Clear Cart
        </Button>
      </div>
    </aside>
  );
};

export default CartSummary;
