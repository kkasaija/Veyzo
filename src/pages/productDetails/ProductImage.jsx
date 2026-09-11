const ProductImage = ({ product }) => {
  return (
    <section className="product-details__image">
      <img
        src={product.thumbnail}
        alt={product.title}
      />
    </section>
  );
};

export default ProductImage;
