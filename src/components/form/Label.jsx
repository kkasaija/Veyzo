const Label = ({ chldren, htmlFor }) => {
  return (
    <label
      className="form-label"
      htmlFor={htmlFor}
    >
      {chldren}
    </label>
  );
};

export default Label;
