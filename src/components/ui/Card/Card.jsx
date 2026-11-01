import classNames from '../../../utils/classNames';

import './card.scss';

const Card = ({ children, className = '', hover = false, padding = 'md', ...rest }) => {
  const classes = classNames('card', `card--${padding}`, hover && 'card--hover', className);
  
  return (
    <div
      className={classes}
      {...rest}
    >
      {children}
    </div>
  );
};

const Header = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>{children}</div>
);

const Body = ({ children, className = '' }) => (
  <div className={`card__body ${className}`}>{children}</div>
);

const Footer = ({ children, className = '' }) => (
  <div className={`card__footer ${className}`}>{children}</div>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
