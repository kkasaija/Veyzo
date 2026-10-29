const ErrorMessage = ({ children }) => {
  if (!children) return null;
  return <small className="form-error">{children}</small>;
};

export default ErrorMessage;
