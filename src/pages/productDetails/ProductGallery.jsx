import ProductThumbnail from './ProductThumbnail';

function ProductGallery({ images, selectedImage, onSelectImage, title }) {
  return (
    <div className="product-gallery">
      {images.map((image) => (
        <ProductThumbnail
          key={image}
          image={image}
          title={title}
          active={image === selectedImage}
          onClick={() => onSelectImage(image)}
        />
      ))}
    </div>
  );
}

export default ProductGallery;
