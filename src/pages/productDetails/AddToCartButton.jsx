import useCart from '../../hooks/useCart';
import Button from '../../components/button/Button';

function AddToCartButton({ product, quantity }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ product, quantity });
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleClick}
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </>
  );
}

export default AddToCartButton;
