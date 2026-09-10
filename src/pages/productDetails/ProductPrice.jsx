import getDiscountedPrice from '../../utils/getDiscountedPrice';

function ProductPrice({ product }) {
  const { price, discountPercentage } = product;
  const discountedPrice = getDiscountedPrice(price, discountPercentage);

  return (
    <div className="price">
      <h2>
        $ {discountedPrice} <s>$ {price}</s>
      </h2>
      <span>{discountPercentage}% OFF</span>
    </div>
  );
}

export default ProductPrice;
