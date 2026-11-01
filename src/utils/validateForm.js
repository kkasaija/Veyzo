function validateForm(form, setErrors) {
  const errors = {};

  if (!form.fname.trim()) errors.fname = 'First name is required.';
  if (!form.lname.trim()) errors.lname = 'Last name is required.';
  if (!form.email.trim()) errors.email = 'Email is required.';
  if (!form.phone.trim()) errors.phone = 'Phone number is required.';
  if (!form.address.trim()) errors.address = 'Address is required.';
  if (!form.city.trim()) errors.city = 'City is required.';
  if (!form.country.trim()) errors.country = 'Country is required.';
  if (!form.postalCode.trim()) errors.postalCode = 'Postal code is required.';

  setErrors(errors);
  return Object.keys(errors).length === 0;
}

export default validateForm;
