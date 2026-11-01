import { useId } from 'react';
import './select.scss';

const Select = ({
  id,
  label,
  options = [],
  placeholder = 'Select an option',
  error = '',
  helperText = '',
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const selectId = id || `select-${generatedId}`;

  return (
    <div className="select-group">
      {label && (
        <label
          htmlFor={selectId}
          className="select-group__label"
        >
          {label}
        </label>
      )}

      <select
        id={selectId}
        className={`select ${error ? 'select--error' : ''} ${className}`}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>

      {!error && helperText && <small className="select-group__helper">{helperText}</small>}
      {error && <small className="select-group__error">{error}</small>}
    </div>
  );
};

export default Select;
