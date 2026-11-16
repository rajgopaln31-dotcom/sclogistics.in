import { Link } from "react-router-dom";
import cars from "../Images/cars.png";import "../styles/Services.css";
import shutter from "../Images/shutter.png"

const serviceCards = [
  {
    icon: "▦",
    title: "Corporate Transportation",
    text: "We offer top-tier transport solutions for businesses, ensuring that your team arrives at their destination safely and on time. Our fleet is equipped with modern amenities, making each journey comfortable and efficient.",
  },
  {
    icon: "▦",
    title: "Event Transportation",
    text: "Whether it's a corporate event, conference, or special occasion, our event transportation services ensure seamless logistics. Our experienced team handles all the coordination.",
  },
  {
    icon: "✈",
    title: "Airport Transfers",
    text: "We offer hassle-free airport transfers, ensuring a smooth transition from your location to the airport and vice versa. Our prompt and reliable service eliminates travel-related stress.",
  },
  {
    icon: "⌖",
    title: "Outstation Travel",
    text: "Explore new horizons with our outstation travel services. Enjoy the convenience of comfortable vehicles and experienced drivers as you embark on journeys beyond your usual routes.",
  },
  {
    icon: "▢",
    title: "Customized Solutions",
    text: "We understand that every client's needs are unique. That's why we offer customized transportation solutions to cater to specific requirements, ensuring a personalized experience.",
  },
  {
    icon: "♧",
    title: "Safety and Efficiency",
    text: "Safety is our priority. Our drivers undergo rigorous training and adhere to strict safety protocols, ensuring a secure journey. Additionally, our technology-driven processes enhance efficiency.",
  },
];

export default function Services() {
  return (
    <div className="services">

      {/* Services Banner */}
      <section className="about-banner">
        <img src={cars} alt="Services" />
        <h1>Services</h1>
      </section>
<section className="section screenshot-services">
  <div className="container">

    {/* Top Row */}
    <div className="services-top-row">

       <img
  src={shutter}
  alt="Toyota Car"
  className="solutions-main-image"
  />

      <div className="services-sidebar">

        <div className="services-side-box">
          <h3>How We Can Help You?</h3>
          <p>
            For specific details about our shuttle car services,
            including rates, availability, and reservation instructions,
            please visit our Contact page.
          </p>
          <Link to="/contact" className="side-link">
            ☎ Contact
          </Link>
          <p className="side-phone">+91-9000202828</p>
        </div>

        <div className="services-side-box">
          <p>
            Discover how our solutions can elevate your
            transportation experience. Partner with us for
            reliable, safe, and efficient journeys.
          </p>
          <Link to="/about" className="side-link">
            ▣ Read More
          </Link>
        </div>

      </div>
    </div>

    {/* Description */}
    <p className="services-description">
      At SCL Transportation Services, we specialize in providing
      comprehensive and reliable transportation solutions<br/> tailored
      to the unique needs of our clients. Our services encompass
      various transportation requirements.
    </p>

    {/* Six Cards */}
    <div className="screenshot-service-grid">
      {serviceCards.map((service) => (
        <article className="screenshot-service-card" key={service.title}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </article>
      ))}
    </div>

  </div>
</section>

    <div className="services">
      <section className="section ev-section">
        <div className="container">
          <h2>Electrical Vechicle Fleet</h2>

          <p>
            At SCL, we're driving toward a greener future with our dedicated
            electric vehicle (EV) fleet. As part of our commitment to
            sustainability and innovation, we have introduced EVs into
            our operations—offering clean, efficient, and quiet
            transportation for our clients.
          </p>

          <h3>Our Own EV Charging Hub</h3>

          <p>
            we have constructed our own dedicated EV charging hub,
            strategically located near the city's bustling IT hub.
            This ensures that our EVs are always ready to go—with fast,
            efficient charging and minimal downtime.
          </p>

          <h3>Why Choose SCL's EV Fleet?</h3>

          <ul>
            <li>Eco-friendly travel with zero tailpipe emissions</li>
            <li>Lower operational noise for a smoother, quieter ride</li>
            <li>Professional drivers trained in EV operation</li>
            <li>24/7 support from our fully computerized operations team</li>
            <li>Charging hub near the IT hub for quick, efficient turnaround</li>
            <li>Commitment to sustainability without compromising on service</li>
          </ul>

          <p>
            By integrating electric vehicles into our fleet, we're not just
            meeting today's transportation needs—we're investing in a
            better tomorrow.
          </p>
        </div>
      </section>
    </div>
  

      {/* Quote Banner */}
      <section className="section services-quote">
        <div className="container">
          <blockquote>
            "Quality is never an accident; it is always the result of
            high intention, sincere effort, intelligent direction and
            skillful execution; it represents the wise choice of many
            alternatives"
          </blockquote>
        </div>
      </section>

    </div>
  );
}