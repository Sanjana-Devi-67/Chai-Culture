const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-mark">☕</span>
        <span className="logo-text">Chai Culture</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#story">Story</a></li>
        <li><a href="#features">Craft</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
