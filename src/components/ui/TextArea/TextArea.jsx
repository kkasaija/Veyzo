import { useId } from 'react';
import FormField from '../FormField';

import './text_area.scss';

const TextArea = ({
  id,
  label,
  error = '',
  helperText = '',
  required = false,
  rows = 5,
  resize = 'vertical',
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const textAreaId = id || `textarea-${generatedId}`;

  return (
    <FormField
      id={textAreaId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <textarea
        id={textAreaId}
        rows={rows}
        className={`textarea textarea--${resize} ${error ? 'textarea--error' : ''} ${className}`}
        {...rest}
      />
    </FormField>
  );
};

export default TextArea;
