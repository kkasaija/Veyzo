import getFormattedCurrency from '../../utils/getFormattedCurrency';
import './productCard.scss';

const ProductCard = ({ product }) => {
  const { thumbnail, title, category, price } = product;

  return (
    <article className="product-card">
      <img
        src={thumbnail}
        alt={title}
        className="product-card__image"
      />
      <div className="product-card__content">
        <p className="product-card__title">{title}</p>
        <p className="product-card__category">{category}</p>
        <p className="product-card__price">{getFormattedCurrency(price)}</p>
      </div>
    </article>
  );
};

export default ProductCard;
