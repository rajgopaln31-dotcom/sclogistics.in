import { Link } from "react-router-dom";

import OriginalImage from "../components/OriginalImage";
import "../styles/About.css";
import cars from "../Images/cars.png";
import certificate from "../Images/certificate.png";

const missionPoints = [
  {
    title: "Our Vision",
    text: "At SCL, we see a world where seamless transportation sparks unlimited possibilities, illuminating the path to progress.",
  },
  {
    title: "Our Mission",
    text: "We're your compass to triumph. With expertise, innovation, and reliability, we steer businesses towards prosperous horizons.",
  },
  {
    title: "Our Goal",
    text: "Excellence is our route. By blending experience and innovation, we're charting a course that sets new industry standards.",
  },
];

const values = [
  { name: "Reliability", text: "We're committed to being the dependable partner that businesses can count on." },
  { name: "Innovation", text: "Embracing technology and fresh ideas to drive continuous improvement." },
  { name: "Integrity", text: "Operating with honesty, transparency, and ethical conduct at all times." },
  { name: "Collaboration", text: "Working hand-in-hand to achieve collective success." },
];

const testimonials: string[] = [
  "Great experience and impressive product. It was a very professional and technically competent job from the whole team.",
  "Excellent app for coin technology and it built on top of potential work. And there are programming assignments record.",
  "Greatest appreciation to you and your team for the outstanding job you did for us. The app is just what we wanted.",
];

export default function About() {
  return (
    <div className="about-page">
    <section className="about-banner">
  <img src={cars} alt="About Us" />
  
</section>
     
     
        <div className="container about-intro-grid">
          <OriginalImage
            className="about-photo"
            name="about-photo.jpg"
            alt="Sri Chinimilli Logistics team"
          />
          <div>
            {/* Certificate Section */}
<section className="about-certificate">
  <div className="container">
    <h2>Our Certificate</h2>
    <p>Our commitment to quality and professional excellence.</p>

    <div className="certificate-image">
      <img src={certificate} alt="Sri Chinimilli Logistics Certificate" />
    </div>
  </div>
</section>
            <span className="tag">Since from 2016</span>
            <h2>Company Overview</h2>
            <p>
              Inaugurated in 2016, SCL swiftly emerged as a trusted and
              economical transportation solution for corporate clientele.
              Presenting a formidable fleet of owned and affiliated vehicles,
              our imprint in the industry remains indelible. With years of
              hands-on experience in logistics and travel, our adept staff
              ensures smooth operations at every turn. Thanks to our
              technology-driven processes, you’ll have instant access to
              information right at your fingertips, reaffirming our commitment
              to efficiency and excellence.
            </p>
            <h4 className="md-name">Ch. Adinarayana</h4>
            <span className="md-role">Managing Director</span>
          </div>
        </div>

      <section className="section about-mission">
        <div className="container mission-grid">
          {missionPoints.map((item) => (
            <article key={item.title} className="mission-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <h2>Our Values</h2>
          <ol className="values-list">
            {values.map((value) => (
              <li key={value.name}>
                <strong>{value.name}:</strong> {value.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about-testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            {testimonials.map((text) => (
              <blockquote key={text}>{text}</blockquote>
            ))}
          </div>
          <Link to="/contact" className="btn">Get A Quote</Link>
        </div>
      </section>
    </div>
  );
}
