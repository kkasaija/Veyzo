import useCart from '../../hooks/useCart';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './cart.scss';

const Cart = () => {
  const { cart } = useCart();

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
              key={item.id} // or item.product.id depending on your data structure
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
