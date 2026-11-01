import { useId } from 'react';

import './text_area.scss';

const TextArea = ({
  id,
  label,
  error = '',
  helperText = '',
  className = '',
  rows = 5,
  resize = 'vertical',
  ...rest
}) => {
  const generatedId = useId();
  const textAreaId = id || `textarea-${generatedId}`;

  return (
    <div className="textarea-group">
      {label && (
        <label
          htmlFor={textAreaId}
          className="textarea-group__label"
        >
          {label}
        </label>
      )}

      <textarea
        id={textAreaId}
        rows={rows}
        className={`textarea textarea--${resize} ${error ? 'textarea--error' : ''} ${className}`}
        {...rest}
      />

      {!error && helperText && <small className="textarea-group__helper">{helperText}</small>}
      {error && <small className="textarea-group__error">{error}</small>}
    </div>
  );
};

export default TextArea;
