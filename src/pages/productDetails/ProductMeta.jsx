function ProductMeta({ product }) {
  return (
    <>
      <p>
        Brand: <strong>{product.brand ?? 'Unavailable'}</strong>
      </p>
      <p>
        Category: <strong>{product.category}</strong>
      </p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
    </>
  );
}

export default ProductMeta;
