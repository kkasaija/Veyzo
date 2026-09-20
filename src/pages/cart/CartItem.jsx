import useCart from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const { product, quantity } = item;

  const handleIncrement = () => {
    updateQuantity({
      id: product.id,
      quantity: quantity + 1,
    });
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeFromCart(product.id);
      return;
    }

    updateQuantity({
      id: product.id,
      quantity: quantity - 1,
    });
  };

  return (
    <article className="cart-item">
      <img
        className="cart-item__image"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="cart-item__details">
        <h2>{product.title}</h2>
        <p className="cart-item__brand">{product.brand}</p>
        <p className="cart-item__category">{product.category}</p>
        <p className="cart-item__price">${product.price}</p>
      </div>

      <div className="cart-item__actions">
        <button onClick={handleIncrement}>+</button>
        <span>{quantity}</span>
        <button onClick={handleDecrement}>-</button>

        <button
          className="cart-item__remove"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
