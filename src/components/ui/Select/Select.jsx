import { useId } from 'react';
import FormField from '../FormField';
import './select.scss';

const Select = ({
  id,
  label,
  options = [],
  placeholder = 'Select an option',
  error = '',
  helperText = '',
  required = false,
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const selectId = id || `select-${generatedId}`;

  return (
    <FormField
      id={selectId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <select
        id={selectId}
        className={`select ${error ? 'select--error' : ''} ${className}`}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </FormField>
  );
};

export default Select;
