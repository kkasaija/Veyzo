import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import cartSelector from '../../features/cart/cartSelector';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';
import './checkout.scss';

const initialForm = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
};

const Checkout = () => {
  const items = useSelector(cartSelector.cartItems);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  if (items.length === 0) {
    return (
      <Navigate
        to="/cart"
        replace
      />
    );
  }

  return (
    <main className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <div className="checkout__content">
        <CheckoutForm
          form={form}
          onChange={handleChange}
        />
        <CheckoutSummary />
      </div>
    </main>
  );
};

export default Checkout;
