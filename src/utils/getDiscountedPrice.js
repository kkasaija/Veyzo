function getDiscountedPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const discountedPrice = price - discount;

  return Number(discountedPrice.toFixed(2));
}

export default getDiscountedPrice;
