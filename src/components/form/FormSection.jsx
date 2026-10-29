const FormSection = ({ title, children }) => {
  return (
    <section className="form-section">
      <h2 className="form-section__title">{title}</h2>
      <div className="form-section__content">{children}</div>
    </section>
  );
};

export default FormSection;
