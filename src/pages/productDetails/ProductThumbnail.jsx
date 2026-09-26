function ProductThumbnail({ image, title, active, onClick }) {
  return (
    <button
      type="button"
      className={`product-thumbnail ${active ? 'product-thumbnail--active' : ''}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
      />
    </button>
  );
}

export default ProductThumbnail;
