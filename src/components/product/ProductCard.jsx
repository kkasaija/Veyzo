import { Link } from 'react-router-dom';
import './productCard.scss';

const ProductCard = ({ product }) => {
  const { thumbnail, title, category, price, description } = product;

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card-link"
    >
      <article className="product-card">
        <img
          src={thumbnail}
          alt={title}
          className="product-card__image"
        />
        <div className="product-card__content">
          <p className="product-card__title">{title}</p>
          <p className="product-card__category">{category}</p>
          <p className="product-card__price">${price}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
