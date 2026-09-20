import useCart from '../../hooks/useCart';

function AddToCartButton({ product, quantity }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ product, quantity });
  };

  return (
    <button
      className="btn btn--primary"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
