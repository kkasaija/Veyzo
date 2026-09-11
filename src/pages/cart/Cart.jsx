import useCart from '../../hooks/useCart';
import './cart.scss';

const Cart = () => {
  const { cart, totalItems, totalPrice } = useCart();

  return (
    <section>
      <h1>Shopping Cart</h1>
    </section>
  );
};
export default Cart;
