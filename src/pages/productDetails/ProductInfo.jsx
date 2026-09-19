import { useDispatch } from 'react-redux';
import ProductMeta from './ProductMeta';
import ProductPrice from './ProductPrice';
import { addItem } from '../../features/cart/cartSlice';

function ProductInfo({ product }) {
  const dispatch = useDispatch();
  return (
    <section className="product-details__info">
      <h1>{product.title}</h1>
      <ProductMeta product={product} />
      <ProductPrice product={product} />
      <p>{product.description}</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </section>
  );
}

export default ProductInfo;
