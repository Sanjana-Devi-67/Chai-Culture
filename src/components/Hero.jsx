const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* ambient glow elements */}
      <span className="glow g1"></span>
      <span className="glow g2"></span>

      <div className="hero-content reveal">
        <h2 className="brand-logo">Chai Culture</h2>

        <h1>Brew the Royal Tradition</h1>

        <p className="hero-desc">
          Premium instant chai tea premix inspired by the elegance and warmth
          of royal Indian households.
        </p>

        <p className="hero-note">
          Slow brewed. Soul warmed.
        </p>

        <div className="email-box glass">
          <input type="email" placeholder="Enter your email address" />
          <button>Notify Me</button>
        </div>

        <div className="royal-seal">Est. 2026</div>
      </div>
    </section>
  );
};

export default Hero;
