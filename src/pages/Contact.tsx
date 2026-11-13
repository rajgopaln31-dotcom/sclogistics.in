import { Mail, MapPin, Phone } from "lucide-react";
import contact from "../Images/contact.png";
import ContactForm from "../components/ContactForm";
import { contactInfo } from "../data/siteData";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
       <section className="about-banner">
  <img src={contact} alt="Contact Us" />
  
</section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <h2>Get in touch</h2>

            <div className="contact-item">
              <MapPin size={22} />
              <div>
                <h4>Visit our location</h4>
                <p>{contactInfo.checkpost}</p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin size={22} />
              <div>
                <h4>Office address</h4>
                <p>{contactInfo.officeAddress}</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={22} />
              <div>
                <h4>Phone Number</h4>
                <p>
                  <a href={contactInfo.phoneTopLink}>{contactInfo.phoneTop}</a>
                </p>
                {contactInfo.officePhones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <Mail size={22} />
              <div>
                <h4>Send us mail</h4>
                <p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </p>
              </div>
            </div>
          </div>

          <ContactForm title="Get A Quote" />
        </div>
      </section>
    </div>
  );
}
