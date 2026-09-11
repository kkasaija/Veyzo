import getDiscountedPrice from '../../utils/getDiscountedPrice';
import getFormattedCurrency from '../../utils/getFormattedCurrency';

function ProductPrice({ product }) {
  const { price, discountPercentage } = product;
  const discountedPrice = getDiscountedPrice(price, discountPercentage);

  return (
    <div className="price">
      <p>
        <s> {getFormattedCurrency(price)}</s>
        {getFormattedCurrency(discountedPrice)}
      </p>
      <span>{discountPercentage}% OFF</span>
    </div>
  );
}

export default ProductPrice;
