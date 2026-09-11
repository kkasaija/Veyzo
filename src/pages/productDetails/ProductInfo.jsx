import ProductMeta from './ProductMeta';
import ProductPrice from './ProductPrice';
import useCart from '../../hooks/useCart';

function ProductInfo({ product }) {
  const { addToCart } = useCart();
  return (
    <section className="product-details__info">
      <h1>{product.title}</h1>
      <ProductMeta product={product} />
      <ProductPrice product={product} />
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </section>
  );
}

export default ProductInfo;
