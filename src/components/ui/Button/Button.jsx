import classNames from '../../../utils/classNames';
import './button.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  ...rest
}) => {
  const classes = classNames(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    loading && 'btn--loading',
    className
  );

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      {...rest}
    >
      {startIcon && <span className="btn__icon">{startIcon}</span>}
      <span className="btn__content">{loading ? 'Loading...' : children}</span>
      {endIcon && !loading && <span className="btn__icon">{endIcon}</span>}
    </button>
  );
};

export default Button;
