import classNames from '../../../utils/classNames';
import './container.scss';

const Container = ({ children, size = 'lg', fluid = false, className = '', ...rest }) => {
  const classes = classNames(
    'container',
    !fluid && `container--${size}`,
    fluid && 'container--fluid',
    className
  );

  return (
    <div
      className={classes}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
