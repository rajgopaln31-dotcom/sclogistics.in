import { Box, Container, Typography } from "@mui/material";
import {
  Visibility,
  TrackChanges,
  Lightbulb,
  Handshake,
} from "@mui/icons-material";
import {
  clientLogos,
} from "../data/siteData";

import OriginalImage from "../components/OriginalImage";
import "../styles/About.css";

import cars from "../Images/cars.png";
import certificate from "../Images/certificate.png";
import blueCar from "../Images/bluecar.png";
import {Link } from "react-router-dom";
const philosophyCards = [
  {
    icon: <Visibility />,
    title: "Our Vision",
    subtitle: "Lighting Up Futures",
    text: "At SCL, we see a world where seamless transportation sparks unlimited possibilities, illuminating the path to progress.",
  },
  {
    icon: <TrackChanges />,
    title: "Our Mission",
    subtitle: "Navigating Success",
    text: "We're your compass to triumph. With expertise, innovation, and reliability, we steer businesses towards prosperous horizons.",
  },
  {
    icon: <Lightbulb />,
    title: "Our Philosophy",
    subtitle: "Pioneering Excellence",
    text: "Excellence is our route. By blending experience and innovation, we're charting a course that sets new industry standards.",
  },
];

const values = [
  {
    title: "Reliability",
    text: "We're committed to being the dependable partner that businesses can count on.",
  },
  {
    title: "Innovation",
    text: "Embracing technology and fresh ideas to drive continuous improvement.",
  },
  {
    title: "Integrity",
    text: "Operating with honesty, transparency, and ethical conduct at all times.",
  },
  {
    title: "Collaboration",
    text: "Working hand-in-hand to achieve collective success.",
  },
];

export default function About() {
  return (
    <Box className="about-page">

      {/* About Banner */}
      <Box className="about-banner">
        <img src={cars} alt="Sri Chinimilli Logistics" />
        <Typography component="h1">
          About Us
        </Typography>
      </Box>

      {/* Slide 1 - Company Overview */}
      <Box component="section" className="about-slide journey-slide">
        <Container maxWidth="xl">
          <Box className="journey-grid">

            <Box className="journey-image">
              <OriginalImage
                className="about-photo"
                name="about-photo.jpg"
                alt="Sri Chinimilli Logistics Vehicles"
              />
            </Box>

            <Box className="journey-content">

              <Typography className="about-watermark">
                About
              </Typography>

              <Typography className="journey-tag">
                Since From 2016
              </Typography>

              <Typography component="h2" className="journey-heading">
                OUR JOURNEY AT A GLANCE
              </Typography>

              <Typography className="journey-description">
                Inaugurated in 2016, SCL swiftly emerged as a trusted and
                economical transportation solution for corporate clientele.
                Presenting a formidable fleet of owned and affiliated vehicles,
                our imprint in the industry remains indelible. With years of
                hands-on experience in logistics and travel, our adept staff
                ensures smooth operations at every turn. Thanks to our
                technology-driven processes, you’ll have instant access to
                information right at your fingertips, reaffirming our commitment
                to efficiency and excellence.
              </Typography>

              <Box className="director-info">
                <Typography component="h4">
                  Ch. Adinarayana
                </Typography>
                <Typography component="span">
                  Managing Director
                </Typography>
              </Box>

            </Box>
          </Box>
        </Container>
      </Box>

      {/* Slide 2 - Vision Mission Philosophy */}
      <Box component="section" className="about-slide philosophy-slide">
        <Container maxWidth="lg">

          <Box className="philosophy-grid">
            {philosophyCards.map((item) => (
              <Box className="philosophy-card" key={item.title}>

                <Box className="philosophy-icon">
                  {item.icon}
                </Box>

                <Typography component="h3">
                  {item.title}
                </Typography>

                <Typography className="philosophy-subtitle">
                  {item.subtitle}
                </Typography>

                <Typography className="philosophy-description">
                  {item.text}
                </Typography>

              </Box>
            ))}
          </Box>

          <Box className="values-heading">
            <Box className="values-icon">
              <Handshake />
            </Box>

            <Typography component="h3">
              Our Values
            </Typography>

            <Typography className="values-subtitle">
              Nurturing Excellence
            </Typography>
          </Box>

        </Container>
      </Box>

      {/* Slide 3 - Our Values List */}
      <Box component="section" className="about-slide values-slide">
        <Container maxWidth="lg">
          <Box className="values-list">

            {values.map((item, index) => (
              <Typography
                component="p"
                className="value-item"
                key={item.title}
              >
                <strong>
                  {index + 1}. {item.title}:
                </strong>{" "}
                {item.text}
              </Typography>
            ))}

          </Box>
        </Container>
      </Box>

      {/* Slide 4 - Certificate */}
      <Box component="section" className="about-slide certificate-slide">
        <Container maxWidth="lg">

          <Box className="certificate-content">

            <Typography component="h2">
              Our Certificate
            </Typography>

            <Typography className="certificate-description">
              Our commitment to quality and professional excellence.
            </Typography>

            <Box className="certificate-image">
              <img
                src={certificate}
                alt="Sri Chinimilli Logistics Certificate"
              />
            </Box>
            {/* Clients We Serve */}
<section className="about-clients">
  <div className="about-container">

    <div className="about-counter">
      <strong>22,800</strong>
      <span>CLIENTS WE SERVE</span>
    </div>

    <div className="about-client-logos">
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

          </Box>

        </Container>
      </Box>
      {/* Blue Car Banner */}
<Box
  component="section"
  className="blue-car-banner"
  style={{ backgroundImage: `url(${blueCar})` }}
>
  <Box className="blue-car-content">

    <Typography component="h1">
      World's Leading Contract
      <br />
      Logistics Provider
    </Typography>

<Box
  component={Link}
  to="/contact"
  className="custom-request-button"
>
  Make Custom Request
</Box>

  </Box>
</Box>

    </Box>
  );
}