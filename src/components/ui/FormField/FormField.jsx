import './form_field.scss';

const FormField = ({
  id,
  label,
  error = '',
  helperText = '',
  required = false,
  className = '',
  children,
}) => {
  const classes = ['form-field', error && 'form-field--error', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {label && (
        <label
          htmlFor={id}
          className="form-field__label"
        >
          {label}
          {required && <span className="form-field__required">*</span>}
        </label>
      )}

      {children}
      {!error && helperText && <small className="form-field__helper">{helperText}</small>}
      {error && <small className="form-field__error">{error}</small>}
    </div>
  );
};

export default FormField;
