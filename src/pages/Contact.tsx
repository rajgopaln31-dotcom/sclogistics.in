//import { Mail, MapPin, Phone } from "lucide-react";
import cars from "../Images/cars.png";
//import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
       <section className="about-banner">
  <img src={cars} alt="Contact Us" />
  <h1>Contact Us</h1>
</section>

    <div className="contact-page">
      {/* 1. CONTACT INFO CARDS */}
      <section className="section contact-cards">
        <div className="container contact-cards-row">
          {/* Email */}
          <div className="contact-card">
            <div className="contact-card-top">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>Email Address</h3>
                <p>adinarayana@sclogistics.in</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card-top">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 40-45166065,</p>
                <p>+91-94412 02828</p>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="contact-card">
            <div className="contact-card-top">
              <span className="contact-icon">🪪</span>
              <div>
                <h3>Office Address</h3>
                <p>
                  Road Number 49, Plot no 961,Swamy Ayyappa Society, Mega
                  Hills, Madhapur, Hyderabad, Telangana-500081
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM */}
      <section className="section contact-form-section">
        <div className="container">
          <h2 className="form-title">Contact Us</h2>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you soon.");
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email Address" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter Number" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter Subject" required />
              </div>
            </div>

            <div className="form-group">
              <label>Enter Message</label>
              <textarea placeholder="Enter Message" rows={8} required></textarea>
            </div>

            <div className="form-btn-wrap">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. MAP */}
      <section className="section map-section">
        <div className="container">
          <iframe
            title="SCL Logistics - Madhapur Location"
            src="https://www.google.com/maps?q=Road+No+49,+Swamy+Ayyappa+Society,+Mega+Hills,+Madhapur,+Hyderabad+500081&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
    </div>
  );
}
