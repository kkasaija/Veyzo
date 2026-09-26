function QuantitySelector({ quantity, onQuantityChange }) {
  const increment = () => {
    onQuantityChange(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={decrement}>−</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default QuantitySelector;
