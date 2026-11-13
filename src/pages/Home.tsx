import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import car from "../Images/car.png";
import man from "../Images/man.png";

import OriginalImage from "../components/OriginalImage";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import gopal from "../Images/gopal.png";

import {
  
  clientLogos,
  
  homeGalleryImages,
  safetyFeatures,
} from "../data/siteData";

import "../styles/Home.css";

interface Slide {
  image: string;
  kicker?: string;
  title: string;
  text: string;
  buttonLabel: string;
  buttonPath: string;
}

const slides: Slide[] = [
  {
    image: car,
    title: "Welcome to Sri Chinimilli Logistics pvt ltd",
    text: "A leading provider of transportation services in Hyderabad",
    buttonLabel: "Learn More",
    buttonPath: "/about",
  },
  {
    image: man,
    kicker: "We're thriving and building better",
    title: "Efficient and Effective Transportation",
    text: "We are committed to providing our customers with exceptional service while offering our employees",
    buttonLabel: "Learn More",
    buttonPath: "/services",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="home">

      {/* Hero Slider */}
    <section
  className={`hero ${current === 1 ? "hero-man" : "hero-car"}`}
  style={{ backgroundImage: `url(${slide.image})` }}
>
        <button
          type="button"
          className="hero-arrow hero-arrow-left"
          aria-label="Previous slide"
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
        >
          <ChevronLeft size={28} />
        </button>

        <div className="container hero-content">
          {slide.kicker && <h6>{slide.kicker}</h6>}
<h1>
  {current === 0 ? (
    <>
      <span className="welcome-white">Welcome to </span>
      <span className="logistics-red">Sri Chinimilli Logistics</span>
      <span className="welcome-white"> pvt ltd</span>
    </>
  ) : (
    <>
      <span className="welcome-white">Efficient and Effective </span>
      <span className="logistics-red">Transportation</span>
    </>
  )}
</h1>

<p>
  {current === 0
    ? "A leading provider of transportation services in Hyderabad"
    : "We are committed to providing our customers with exceptional service while offering our employees"}
</p>
          <Link to={slide.buttonPath} className="btn">
            {slide.buttonLabel}
          </Link>
        </div>

        <button
          type="button"
          className="hero-arrow hero-arrow-right"
          aria-label="Next slide"
          onClick={() =>
            setCurrent((current + 1) % slides.length)
          }
        >
          <ChevronRight size={28} />
        </button>
      </section>

     

      {/* Company Overview */}
      <section className="section overview">
        <div className="container overview-grid">
          <OriginalImage
            className="overview-photo"
            name="about-photo.jpg"
            alt="Sri Chinimilli Logistics team"
          />

          <div>
        <h6>about</h6>
<span className="tag">Since from 2016</span>

<h2>
  <span className="company-blue">Company</span>{" "}
  <span className="overview-black">Overview</span>
</h2>


            <p>
              <strong>
                Inaugurated in 2016, SCL swiftly emerged as a trusted and
                economical transportation solution for corporate clientele.
              </strong>{" "}
              Presenting a formidable fleet of owned and affiliated vehicles,
              our imprint in the industry remains indelible. With years of
              hands-on experience in logistics and travel, our adept staff
              ensures smooth operations at every turn. Thanks to our
              technology-driven processes, you’ll have instant access to
              information right at your fingertips, reaffirming our commitment
              to efficiency and excellence...
              …{" "}
              <Link to="/about" className="text-link">
                read more
              </Link>
            </p>

            <h4 className="md-name">Ch. Adinarayana</h4>
            <span className="md-role">Managing Director</span>
          </div>
        </div>
      </section>

     {/* Services */}
<section className="section what-we-do">
  <div className="container">
    <h6 className="service-white">service</h6>
    <span className="tag service-white">Featured Services</span>

    <h2>
      <span className="service-white">What </span>
      <span className="service-orange">We Do</span>
    </h2>

    <h3 className="service-white">Employee Transportation</h3>

    <p className="lead service-white">
      Our comprehensive car and bus services are designed to keep your
      logistics fleet running smoothly, ensuring minimal downtime and
      maximum productivity.
    </p>
  

          <div className="photo-row">
            <OriginalImage
              name="emp-e1725525792611.jpg"
              alt="Employee transportation"
            />
            <OriginalImage
              name="bustp-e1725525819290.jpg"
              alt="SCL bus"
            />
            <OriginalImage
              name="car2-e1725525842332.jpg"
              alt="SCL car"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <h6>service</h6>
          <span className="tag">Our Gallery</span>
          <h2>Promoting Safety <span className="wellness-orange">through Wellness</span></h2>
          <Gallery images={homeGalleryImages} />
        </div>
      </section>

      {/* Safety */}
     <section
  className="section safety"
  style={{ backgroundImage: `url(${car})`,}}
>
  <div className="container safety-grid">
    <div>
      <h6>quote</h6>
      <span className="tag">Since from 2016</span>
    <h2>
  <span className="secure-text">100% secure and</span>{" "}
  <span className="safe-text">Safe</span>
</h2>
      <p className="safety-description">
  To ensure the safety of female employees, our drivers and
  supervisors are not allowed to pick them up first or drop
  them off last between 20:00 Hrs & 06:00 Hrs IST. If it is
  necessary for a female employee to be picked up or dropped
  off during this time, a co-male employee or company
  security personnel must accompany her in the cab and
  provide an escort until she reaches her destination.

  We at SCL ensure to inform the Transportation User about
  any changes in vehicle details, including the driver or
  the vehicle, beyond the information shared via SMS.

  Our drivers and staff are trained to maintain
  professionalism, efficiency, and respect towards our
  associates. Additionally, we have instructed them not to
  engage in any personal discussions with our Transportation
  Users.
</p>

      <ul className="safety-features">
        {safetyFeatures.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
    

    <ContactForm />
  </div>
</section>

      {/* Clients */}
      <section className="section clients">
        <div className="container">
          <div className="counter">
            <strong>22,800</strong>
            <span>CLIENTS WE SERVE</span>
          </div>

          <div className="client-logos">
            {clientLogos.map((name, index) => (
              <OriginalImage
                key={name}
                name={name}
                alt={`Client logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
{/* Call To Action */}
<section
  className="cta"
  style={{ backgroundImage: `url(${gopal})` }}
>
  <div className="container cta-inner">
    <OriginalImage
      name="logo4.png"
      alt="Sri Chinimilli Logistics"
    />

    <h2>Your Best Logistics Partner</h2>

    <Link to="/contact" className="btn">
      make custom request
    </Link>
  </div>
</section>

     

    </div>
  );
}
