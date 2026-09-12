function ProductMeta({ product }) {
  return (
    <div className="product-details__meta">
      <p>
        Brand: <strong>{product.brand ?? 'Unavailable'}</strong>
      </p>
      <p>
        Category: <strong>{product.category}</strong>
      </p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default ProductMeta;
