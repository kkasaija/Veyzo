import { useId } from 'react';
import FormField from '../FormField';

import './input.scss';

function Input({
  id,
  label,
  error = '',
  helperText = '',
  required = false,
  className = '',
  startIcon,
  endIcon,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;

  return (
    <FormField
      id={inputId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <div className={`input ${error ? 'input--error' : ''}`}>
        {startIcon && <span className="input__icon">{startIcon}</span>}

        <input
          id={inputId}
          className={className}
          {...rest}
        />

        {endIcon && <span className="input__icon">{endIcon}</span>}
      </div>
    </FormField>
  );
}

export default Input;
