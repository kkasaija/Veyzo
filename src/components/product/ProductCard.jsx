import './productCard.scss';

const ProductCard = ({ product }) => {
  const { thumbnail, title, category, price, description } = product;

  return (
    <article className="product-card">
      <img
        src={thumbnail}
        alt={title}
        className="product-card__image"
      />
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__category">{category}</p>
        <p className="product-card__price">${price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
