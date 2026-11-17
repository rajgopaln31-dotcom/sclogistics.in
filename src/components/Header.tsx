import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Share2,
} from "lucide-react";

import Navbar from "./Navbar";
import OriginalImage from "./OriginalImage";
import { contactInfo } from "../data/siteData";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">

      {/* Topbar */}
      <div className="topbar">
        <div className="container topbar-inner">

          <div className="topbar-contact">
            <a href={contactInfo.phoneTopLink} className="topbar-item">
              <Phone size={14} />
              {contactInfo.phoneTop}
            </a>

            <a href={`mailto:${contactInfo.email}`} className="topbar-item">
              <Mail size={14} />
              {contactInfo.email}
            </a>

            <span className="topbar-item">
              <a
  href="https://www.google.com/maps?q=Road+No+49,+Swamy+Ayyappa+Society,+Mega+Hills,+Madhapur,+Hyderabad+500081&output=embed"
  className="topbar-item"
  target="_blank"
  rel="noopener noreferrer"
>
  <MapPin size={14} />
  {contactInfo.checkpost}
</a>
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="topbar-social">
            <a href="https://www.facebook.com/" target="_blank"
              rel="noopener noreferrer" aria-label="Facebook">
              <Facebook />
            </a>

            <a href="https://twitter.com/" target="_blank"
              rel="noopener noreferrer" aria-label="Twitter">
              <Twitter />
            </a>

            <a href="https://www.linkedin.com/" target="_blank"
              rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>

            <a href="https://www.youtube.com/" target="_blank"
              rel="noopener noreferrer" aria-label="YouTube">
              <Youtube />
            </a>

            <a href="#" aria-label="Share">
              <Share2 />
            </a>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="container header-main">

        <Link to="/" className="header-logo" onClick={closeMenu}>
          <OriginalImage
            name="logo8.png"
            alt="Sri Chinimilli Logistics"
          />
        </Link>

        {/* Mobile Overlay */}
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Mobile Menu */}
        <div
          className={
            menuOpen
              ? "mobile-menu-panel mobile-menu-panel-open"
              : "mobile-menu-panel"
          }
        >

          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={27} />
          </button>

          <Navbar
            isOpen={menuOpen}
            onNavigate={closeMenu}
          />

          {/* Contact Details */}
          <div className="mobile-menu-contact">

            <a href={contactInfo.phoneTopLink}>
              <Phone size={19} />
              <span>{contactInfo.phoneTop}</span>
            </a>

            <a href={`mailto:${contactInfo.email}`}>
              <Mail size={19} />
              <span>{contactInfo.email}</span>
            </a>

            <div>
              <MapPin size={19} />
              <span>{contactInfo.checkpost}</span>
            </div>

          </div>

          {/* Quote Button */}
          <Link
            to="/contact"
            className="mobile-menu-quote"
            onClick={closeMenu}
          >
            Get A Quote
          </Link>

          {/* Mobile Social Icons */}
          <div className="mobile-menu-socials">
            <Facebook size={21} />
            <Twitter size={21} />
            <Linkedin size={21} />
            <Youtube size={21} />
            <Share2 size={21} />
          </div>

        </div>

        {/* Desktop Quote */}
        <Link
          to="/contact"
       
          className="btn header-quote"
          onClick={closeMenu}
        >
          Get A Quote
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={32} />}
        </button>

      </div>
    </header>
  );
}