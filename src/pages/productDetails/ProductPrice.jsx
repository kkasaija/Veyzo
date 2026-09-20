import getDiscountedPrice from '../../utils/getDiscountedPrice';
import getFormattedCurrency from '../../utils/getFormattedCurrency';

function ProductPrice({ product }) {
  const { price, discountPercentage } = product;
  const discountedPrice = getDiscountedPrice(price, discountPercentage);

  return (
    <div className="product-details__price">
      <span className="product-details__price-original">{getFormattedCurrency(price)}</span>
      <span className="product-details__price-current">
        {getFormattedCurrency(discountedPrice)}
      </span>
      <span className="product-details__price-discount">{discountPercentage}% OFF</span>
    </div>
  );
}

export default ProductPrice;
