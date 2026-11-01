import { useId } from 'react';

import './input.scss';

function Input({ label, error, helperText, startIcon, endIcon, className = '', id, ...rest }) {
  const generatedId = useId();
  const inputId = id || `input-${generatedId}`;

  return (
    <div className="input-group">
      {label && (
        <label
          htmlFor={inputId}
          className="input-group__label"
        >
          {label}
        </label>
      )}

      <div className={`input-group__control ${error ? 'input-group__control--error' : ''}`}>
        {startIcon && <span className="input-group__icon">{startIcon}</span>}

        <input
          id={inputId}
          className={`input ${className}`}
          {...rest}
        />

        {endIcon && <span className="input-group__icon">{endIcon}</span>}
      </div>

      {helperText && !error && <small className="input-group__helper">{helperText}</small>}
      {error && <small className="input-group__error">{error}</small>}
    </div>
  );
}

export default Input;
