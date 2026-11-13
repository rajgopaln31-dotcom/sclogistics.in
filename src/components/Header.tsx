import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import OriginalImage from "./OriginalImage";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-main">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <OriginalImage
            name="logo8.png"
            alt="Sri Chinimilli Logistics"
          />
        </Link>

        <Navbar isOpen={menuOpen} onNavigate={closeMenu} />

        <Link
          to="/contact"
          className="btn header-quote"
          onClick={closeMenu}
        >
          Get A Quote
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}