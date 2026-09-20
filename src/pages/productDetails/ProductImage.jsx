import { useState } from 'react';
import ProductGallery from './ProductGallery';

function ProductImage({ product }) {
  const images = product.images?.length ? product.images : [product.thumbnail];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="product-details__image">
      <div className="product-details__preview">
        <img
          src={selectedImage}
          alt={product.title}
        />
      </div>

      <ProductGallery
        images={images}
        selectedImage={selectedImage}
        onSelectImage={setSelectedImage}
        title={product.title}
      />
    </section>
  );
}

export default ProductImage;
