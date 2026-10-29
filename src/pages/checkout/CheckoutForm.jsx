import Form from '../../components/form/Form';
import FormSection from '../../components/form/FormSection';
import FormGroup from '../../components/form/FormGroup';
import Label from '../../components/form/Label';
import Input from '../../components/form/Input';

const CheckoutForm = ({ form, onChange }) => {
  return (
    <Form>
      <FormSection title="Contact Information">
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="Enter your phone number"
          />
        </FormGroup>
      </FormSection>
      <FormSection title="Shipping Address">{/* Shipping fields go here */}</FormSection>
    </Form>
  );
};
export default CheckoutForm;
