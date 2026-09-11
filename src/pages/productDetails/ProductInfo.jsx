import ProductMeta from './ProductMeta';
import ProductPrice from './ProductPrice';

function ProductInfo({ product }) {
  return (
    <section className="product-details__info">
      <h1>{product.title}</h1>
      <ProductMeta product={product} />
      <ProductPrice product={product} />
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </section>
  );
}

export default ProductInfo;
