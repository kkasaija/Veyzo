import useCart from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, removeItem } = useCart();

  const { product, quantity } = item;

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
        <button onClick={() => addToCart(product)}>+</button>

        <span>{quantity}</span>

        <button onClick={() => removeFromCart(product.id)}>-</button>

        <button
          className="cart-item__remove"
          onClick={() => removeItem(product.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
