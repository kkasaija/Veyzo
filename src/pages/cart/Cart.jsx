import { useSelector } from 'react-redux';
import cartSelector from '../../features/cart/cartSelector';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './cart.scss';

const Cart = () => {
  const cart = useSelector(cartSelector.cartItems);

  if (cart.length === 0) {
    return (
      <section className="cart cart--empty">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h1>Shopping Cart</h1>

      <div className="cart__content">
        <div className="cart__items">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
            />
          ))}
        </div>

        <CartSummary />
      </div>
    </section>
  );
};

export default Cart;
