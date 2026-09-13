const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Discover Amazing Products</h1>
        <p className="hero__description">
          Shop the latest products from trusted brands at great prices.
        </p>
        <div className="hero__actions">
          <button className="button">Shop Now</button>
          <button className="button button--secondary">Explore Categories</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
