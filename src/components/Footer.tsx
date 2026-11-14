import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import OriginalImage from "./OriginalImage";
import { contactInfo, footerGalleryImages } from "../data/siteData";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link
            to="/"
            className="footer-logo"
            style={{ transform: "translate(20px)" }}
          >
            <OriginalImage name="logo4.png" alt="Sri Chinimilli Logistics" />
          </Link>
          <p>
            Sri Chinimilli Logistics (SCL) Pvt Ltd. Providing transportation
            services since 2016.
          </p>
          <h4>Our Gallery</h4>
          <div className="footer-gallery">
            {footerGalleryImages.map((name) => (
              <OriginalImage key={name} name={name} alt="SCL gallery" />
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Staff Transportation</Link></li>
            <li><Link to="/services">Shuttle Services</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul className="footer-contact">
            <li><MapPin size={16} /> <span>{contactInfo.officeAddress}</span></li>
            <li>
              <Phone size={16} />
              <span>{contactInfo.officePhones.join(", ")}</span>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          ©2023 <strong>Sri Chinimilli Logistics</strong>. All Rights Reserved
        </p>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
