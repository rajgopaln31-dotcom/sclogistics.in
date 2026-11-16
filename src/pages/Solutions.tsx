import { Link } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import {
  VolunteerActivism,
  FrontHand,
  AccessTime,
} from "@mui/icons-material";

import cars from "../Images/cars.png";
import "../styles/Solutions.css";
import solutions from "../Images/solutions.png"

const solutionCards = [
  {
    icon: <VolunteerActivism />,
    title: "Reliable, Cost-Effective Transport Solutions",
    text: "Experience unparalleled business collaboration with SCL's unique approach. Our flexibility allows us to focus on delivering innovative and budget-friendly transport solutions, setting us apart. As trusted partners to Fortune leaders, we are dedicated to ensuring quality and affordability. Join SCL Transportation Services for top-tier reliability.",
  },
  {
    icon: <FrontHand />,
    title: "Safe Journeys with Trusted Transport",
    text: "At SCL, safety is paramount. Our drivers meet stringent criteria, including background checks, minimum 3 years' experience, valid licenses, and clear records. Rigorous training equips them to handle both everyday and emergency situations. Travel with confidence, knowing your security is our priority.",
  },
  {
    icon: <AccessTime />,
    title: "Efficient, Effective Transportation",
    text: "Elevate your transportation experience with SCL. Our commitment to efficiency is evident in vehicles arriving 15 minutes early, equipped with GPS for real-time tracking. Virtual fuel cards ensure seamless refueling across India. From audits to trained staff and optimized fleet utilization reports, our commitment to quality shines through. Choose SCL for transportation that goes beyond the ordinary.",
  },
];

export default function Solutions() {
  return (
    <Box className="solutions">

      {/* Solutions Banner */}
      <section className="about-banner">
        <img src={cars} alt="Solutions" />
        <h1>Solutions</h1>
      </section>

      {/* Transportation Image and Introduction */}
      <Container className="solutions-intro">
     <img
  src={solutions}
  alt="Toyota Car"
  className="solutions-main-image"
/>

        <Typography className="lead">
          Discover the perfect transportation solution at SCL. Whether you're
          a business, event planner, or an individual traveler, we've got you
          covered. From corporate transport to seamless event logistics,
          airport transfers to outstation adventures, and personalized
          solutions, we're your travel partner. Elevate your experience with us.
        </Typography>
      </Container>

      {/* Three Transportation Cards */}
      <Container className="solutions-cards">

        <Box className="solutions-card-grid">
          {solutionCards.map((card, index) => (
            <Box className="solutions-card" key={index}>

              <Box className="solutions-icon">
                {card.icon}
              </Box>

              <Typography variant="h6" className="solutions-card-title">
                {card.title}
              </Typography>

              <Typography className="solutions-card-text">
                {card.text}
              </Typography>

              <Button
                component={Link}
                to="/contact"
                className="solutions-card-button"
                variant="contained"
              >
                Know more
              </Button>

            </Box>
          ))}
        </Box>

      </Container>

      {/* Quality Quote */}
      <Container className="solutions-quote">
        <Typography className="solutions-quote-text">
          "Quality is never an accident; it is always the result of high
          intention, sincere effort, intelligent direction and skilful
          execution; it represents the wise choice of many alternatives"
        </Typography>
      </Container>

    </Box>
  );
}