import { Link } from "react-router-dom";
import cars from "../Images/cars.png";
import OriginalImage from "../components/OriginalImage";
import "../styles/Solutions.css";

interface SolutionBlock {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}

const blocks: SolutionBlock[] = [
  {
    title: "Reliable, Cost-Effective Transport Solutions",
    text: "Experience unparalleled business collaboration with SCL's unique approach. Our flexibility allows us to focus on delivering innovative and budget-friendly transport solutions, setting us apart. As trusted partners to Fortune leaders, we are dedicated to ensuring quality and affordability. Join SCL Transportation Services for top-tier reliability.",
    image: "car2-e1725525842332.jpg",
    imageAlt: "SCL car",
  },
  {
    title: "Safe Journeys with Trusted Transport",
    text: "At SCL, safety is paramount. Our drivers meet stringent criteria, including background checks, minimum 3 years' experience, valid licenses, and clear records. Rigorous training equips them to handle both everyday and emergency situations. Travel with confidence, knowing your security is our priority",
    image: "bustp-e1725525819290.jpg",
    imageAlt: "SCL bus",
  },
  {
    title: "Efficient, Effective Transportation",
    text: "Elevate your transportation experience with SCL. Our commitment to efficiency is evident in vehicles arriving 15 minutes early, equipped with GPS for real-time tracking. Virtual fuel cards ensure seamless refueling across India. From audits to trained staff and optimized fleet utilization reports, our commitment to quality shines through. Choose SCL for transportation that goes beyond the ordinary.",
    image: "emp-e1725525792611.jpg",
    imageAlt: "Employee transportation",
  },
];

export default function Solutions() {
  return (
    <div className="solutions">
          <section className="about-banner">
  <img src={cars} alt="Solutions" />
  
</section>

      <section className="section solutions-intro">
        <div className="container">
          <p className="lead">
            Discover the perfect transportation solution at SCL. Whether you're
            a business, event planner, or an individual traveler, we've got you
            covered. From corporate transport to seamless event logistics,
            airport transfers to outstation adventures, and personalized
            solutions, we're your travel partner. Elevate your experience with
            us.
          </p>
        </div>
      </section>

      {blocks.map((block, index) => (
        <section
          key={block.title}
          className={
            index % 2 === 0 ? "section solution-row" : "section solution-row solution-row-alt"
          }
        >
          <div className="container solution-grid">
            <OriginalImage className="solution-photo" name={block.image} alt={block.imageAlt} />
            <div>
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="section solutions-quote">
        <div className="container">
          <blockquote>
            "Quality is never an accident; it is always the result of high
            intention, sincere effort, intelligent direction and skilful
            execution; it represents the wise choice of many alternatives"
          </blockquote>
          <Link to="/contact" className="btn">Get A Quote</Link>
        </div>
      </section>
    </div>
  );
}
