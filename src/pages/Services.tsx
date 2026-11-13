import { Link } from "react-router-dom";
import servicesBanner from "../Images/services.png";
import OriginalImage from "../components/OriginalImage";
import "../styles/Services.css";

interface ServiceItem {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

const services: ServiceItem[] = [
  {
    title: "Airport Transfers",
    text: "Our airport shuttle car services are designed to ensure you arrive at the airport on time and in style. We offer efficient pickups and drop-offs, allowing you to travel stress-free and focus on your journey.",
    image: "carss.jpg",
    imageAlt: "SCL cars",
  },
  {
    title: "City Exploration",
    text: "Explore the city hassle-free with our shuttle car services. Whether you're a tourist looking to see the sights or a local wanting to avoid parking and traffic, our shuttle cars are a convenient choice.",
    image: "shuttle.jpg",
    imageAlt: "SCL shuttle",
  },
  {
    title: "Event Transportation",
    text: "Attending a special event? Our shuttle car services are perfect for providing transportation for smaller groups. From weddings and parties to corporate functions, we'll ensure that you and your guests reach on time.",
    image: "car2-e1725525842332.jpg",
    imageAlt: "SCL car",
  },
];

const beyondUsual: string[] = [
  "Our services are a cost-effective alternative that saves your employees money.",
  "We offer eco-friendly transportation options, contributing to a greener environment and reduced carbon footprint.",
  "Whether your workforce has varied shifts or unique commuting needs, we tailor our services to accommodate your specific requirements.",
];

export default function Services() {
  return (
    <div className="services">
       <section className="about-banner">
  <img src={servicesBanner} alt="Services" />
  
</section>

      <section className="section services-intro">
        <div className="container services-intro-grid">
          <div>
            <h2>Employee Transportation</h2>
            <p>
              Welcome to Our Sri Chinimilli Logistics! We understand that a
              hassle-free commute is essential for your employees' well-being
              and productivity. Our comprehensive transportation solutions are
              designed to make their journey to and from work convenient, safe,
              and efficient.
            </p>
            <p>
              We pride ourselves on punctuality and consistency, ensuring that
              your employees reach their workplace on time, every time.
            </p>
          </div>
          <OriginalImage
            className="services-photo"
            name="emp-e1725525792611.jpg"
            alt="Employee transportation"
          />
        </div>
      </section>

      <section className="section service-cards">
        <div className="container service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <OriginalImage name={service.image} alt={service.imageAlt} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-beyond">
        <div className="container services-beyond-grid">
          <div>
            <h2>Going Beyond the Usual</h2>
            <ul>
              {beyondUsual.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <OriginalImage
            className="services-photo"
            name="bustp-e1725525819290.jpg"
            alt="SCL bus"
          />
        </div>
      </section>

      <section className="section services-help">
        <div className="container">
          <h2>How we can help you?</h2>
          <p>
            For specific details about our shuttle car services, including
            rates, availability, and reservation instructions, please visit our
            Contact page.
          </p>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
