import { Link } from "react-router-dom";
import cars from "../Images/cars.png";
import Gallery from "../components/Gallery";
import OriginalImage from "../components/OriginalImage";
import { safetyText } from "../data/siteData";
import "../styles/Infrastructure.css";

const fleetImages: string[] = [
  "IMG_8782-copy-scaled.jpg",
  "IMG_8844-copy-scaled.jpg",
  "bustp-e1725525819290.jpg",
  "car2-e1725525842332.jpg",
  "carss.jpg",
  "shuttle.jpg",
];

export default function Infrastructure() {
  return (
    <div className="infrastructure">
         <section className="about-banner">
  <img src={cars} alt="Infrastructure" />
  <h1>Infrastructure</h1>
</section>

      <section className="section infra-office">
        <div className="container infra-grid">
          <div>
            <h2>Our Office</h2>
            <p>
              SCL operates from its fully computerized office at Yousufguda
              Check Post, which is open 24/7 and equipped with high-speed
              internet and multiple telephone lines for easy reservation,
              allocation, and dispatch of cars. The office also has a
              well-trained accounts department that manages billing and
              receivables, an expert fleet supervisor who oversees the fleet
              under the fleet manager’s supervision, and is specially designed
              to accommodate the reservation and dispatch team, accountants,
              credit control team, and core team members.
            </p>
          </div>
          <OriginalImage
            className="infra-photo"
            name="emp1.jpg"
            alt="SCL team"
          />
        </div>
      </section>

      <section className="section infra-safety">
        <div className="container">
          <h2>Safety</h2>
          <p>{safetyText}</p>
        </div>
      </section>

      <section className="section infra-partner">
        <div className="container">
          <h2>This approach has made us the preferred provider for companies</h2>
          <p>
            SCL offers the advantage of our organization's extensive expertise
            across various functions, service standards, and customer
            satisfaction. Building a transparent partnership with SCL means
            experiencing:
          </p>
          <p className="infra-note">
            We enhance our operations by relieving you of the worries.
          </p>
        </div>
      </section>

      <section className="section infra-fleet">
        <div className="container">
          <h2>Fleet &amp; Gallery</h2>
          <Gallery images={fleetImages} />
          <Link to="/contact" className="btn">Get A Quote</Link>
        </div>
      </section>
    </div>
  );
}
