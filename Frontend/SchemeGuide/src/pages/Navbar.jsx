import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <Shield className="navbar-icon" />
            SchemeGuide
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/schemes">Schemes</Link>
            <Link to="/about">About</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="navbar-mobile">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/schemes" onClick={() => setIsOpen(false)}>Schemes</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/faqs" onClick={() => setIsOpen(false)}>FAQs</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
