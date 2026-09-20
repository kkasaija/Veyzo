import { useState } from 'react';

import ProductMeta from './ProductMeta';
import ProductPrice from './ProductPrice';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="product-details__info">
      <h1 className="product-details__title">{product.title}</h1>
      <ProductMeta product={product} />
      <ProductPrice product={product} />
      <p className="product-details__description">{product.description}</p>
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={setQuantity}
      />

      <AddToCartButton
        product={product}
        quantity={quantity}
      />
    </section>
  );
}

export default ProductInfo;
