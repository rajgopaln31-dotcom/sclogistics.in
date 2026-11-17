import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  MapPinned,
  CarFront,
  Headset,
  Clock,
} from "lucide-react";

import car from "../Images/car.png";
import man from "../Images/man.png";
import gopal from "../Images/gopal.png";

import OriginalImage from "../components/OriginalImage";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";

import {
  clientLogos,
  homeGalleryImages,
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
    title: "Efficient and Effective Transportation",
    text: "We are committed to providing our customers with exceptional service while offering our employees",
    buttonLabel: "Learn More",
    buttonPath: "/services",
  },
];

const serviceImages = [
  { name: "emp-e1725525792611.jpg", alt: "Employee transportation" },
  { name: "bustp-e1725525819290.jpg", alt: "SCL bus" },
  { name: "car2-e1725525842332.jpg", alt: "SCL car" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [serviceCurrent, setServiceCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setServiceCurrent((index) => (index + 1) % serviceImages.length);
    }, 3000);
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
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft size={28} />
        </button>

        <div className="container hero-content">
          {slide.kicker && <h6>{slide.kicker}</h6>}
          <h1>
            {current === 0 ? (
              <>
                <span className="welcome-white">Welcome to Sri </span><br/>
                <span className="logistics-red"> Chinimilli Logistics</span><br/>
                <span className="welcome-white"> pvt ltd</span>
              </>
            ) : (
              <>
                <span className="welcome-white">Efficient And <br/>Effective </span><br/>
                <span className="logistics-red">Transportation</span>
              </>
            )}
          </h1>
          <p>
            {current === 0
              ? "A leading provider of transportation services in Hyderabad"
              : (
                <>
                  We are committed to providing our customers
                  <br />
                  with exceptional service while offering our employees
                </>
              )}
          </p>
          <Link to={slide.buttonPath} className="btn">{slide.buttonLabel}</Link>
        </div>

        <button
          type="button"
          className="hero-arrow hero-arrow-right"
          aria-label="Next slide"
          onClick={() => setCurrent((current + 1) % slides.length)}
        >
          <ChevronRight size={28} />
        </button>
      </section>

      {/* Company Overview - About Watermark */}
      <section className="section overview">
        <div className="container overview-grid">
          <OriginalImage
            className="overview-photo"
            name="about-photo.jpg"
            alt="Sri Chinimilli Logistics team"
          />

          <div className="overview-text">
            <div className="overview-heading-wrap">
              <span className="watermark-about" aria-hidden="true">About</span>
              <div className="since-row">
                <span className="since-line" />
                <span className="tag since-orange">Since From 2016</span>
              </div>
              <h2 className="overview-title">
                <span className="company-blue">Company</span>{" "}
                <span className="overview-black">Overview</span>
              </h2>
            </div>

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
              to efficiency and excellence...{" "}
              <Link to="/about" className="text-link">read more</Link>
            </p>

            <h4 className="md-name">Ch. Adinarayana</h4>
            <span className="md-role">Managing Director</span>
          </div>
        </div>
      </section>

      {/* Services - Services Watermark */}
      <section className="section what-we-do">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-watermark watermark-services" aria-hidden="true">Services</span>
            <div className="since-row">
              <span className="since-line" />
              <span className="tag service-white">Featured Services</span>
            </div>
            <h2 className="section-title">
              <span className="service-white">What </span>
              <span className="service-orange">We Do</span>
            </h2>
          </div>

          <h3 className="service-white">Employee Transportation</h3>

          <p className="lead service-white">
            Our comprehensive car and bus services are designed to keep your
            logistics fleet running smoothly, ensuring minimal downtime and
            maximum productivity.
          </p>

          <div className="service-slider">
            <div
              className="service-slider-track"
              style={{ transform: `translateX(-${serviceCurrent * 100}%)` }}
            >
              {serviceImages.map((image) => (
                <div className="service-slide" key={image.name}>
                  <OriginalImage name={image.name} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>

          <div className="service-slider-dots">
            {serviceImages.map((image, index) => (
              <button
                key={image.name}
                type="button"
                className={serviceCurrent === index ? "active-dot" : ""}
                aria-label={`Show service image ${index + 1}`}
                aria-current={serviceCurrent === index ? "true" : undefined}
                onClick={() => setServiceCurrent(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Gallery Watermark */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading-wrap">
            <span className="section-watermark watermark-gallery" aria-hidden="true">Gallery</span>
            <div className="since-row">
              <span className="since-line" />
              <span className="tag">Our Gallery</span>
            </div>
            <h2 className="section-title">
              Promoting Safety{" "}
              <span className="wellness-orange">through Wellness</span>
            </h2>
          </div>

          <Gallery images={homeGalleryImages} />
        </div>
      </section>

      {/* Safety */}
      <section className="section safety" style={{ backgroundImage: `url(${car})` }}>
        <div className="container safety-grid">
          <div className="safety-left">
            <h6>quote</h6>
            <span className="tag">Since from 2016</span>
            <h2>
              <span className="secure-text">100% secure and</span>{" "}
              <span className="safe-text">Safe</span>
            </h2>
            <p className="safety-description"></p>
            <div className="safety-features">
              <div className="safety-feature"><MapPinned /><span>Online Tracking</span></div>
              <div className="safety-feature"><CarFront /><span>Efficient Transportation</span></div>
              <div className="safety-feature"><Headset /><span>24/7 Support</span></div>
              <div className="safety-feature"><Clock /><span>Consistency</span></div>
            </div>
          </div>
          <div className="safety-right"><ContactForm /></div>
        </div>
      </section>

      {/* Clients */}
      <section className="section clients">
        <div className="container">
          <div className="counter"><strong>22,800</strong><span>CLIENTS WE SERVE</span></div>
          <div className="client-logos">
            {clientLogos.map((name, index) => (
              <OriginalImage key={name} name={name} alt={`Client logo ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta" style={{ backgroundImage: `url(${gopal})` }}>
        <div className="container cta-inner">
          <OriginalImage name="logo4.png" alt="Sri Chinimilli Logistics" />
          <h2>Your Best Logistics Partner</h2>
          <Link to="/contact" className="btn">make custom request</Link>
        </div>
      </section>

    </div>
  );
}


