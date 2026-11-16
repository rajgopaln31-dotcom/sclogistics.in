import cars from "../Images/cars.png";
import "../styles/Infrastructure.css";
import solutions from "../Images/solutions.png";
export default function Infrastructure() {
  return (
    <div className="infrastructure">
        
      
            {/* Services Banner */}
            <section className="about-banner">
              <img src={cars} alt="Services" />
              <h1>Infrastructure</h1>
            </section>
     
        <div className="container">

      {/* 1. HUB */}
      <section className="section hub-section">
        <div className="container">
          <h2 className="orange-title">HUB</h2>
          <p>
            SCL's 24/7 Yousufguda and Madhapur offices are fully computerized
            with high-speed internet, ensuring seamless reservations, dispatch,
            fleet management, and accounts operations. In addition, we have
            recently constructed our own EV charging hub, further enhancing
            our commitment to sustainable transportation solutions.
          </p>
          <ul className="check-list">
            <li>Hassle-free car rental services - 24/7 - 365 days.</li>
            <li>A reliable and transparent business partner.</li>
            <li>A relationship founded on values, integrity, and customer satisfaction.</li>
            <li>Consistently delivering high-quality services.</li>
          </ul>
        </div>
      </section>

      {/* 2. SECURITY */}
      <section className="section security-section">
        <div className="container">
          <h2 className="orange-title">SECURITY</h2>
          <p>
            To ensure the safety of female employees, our drivers and supervisors
            are not allowed to pick them up first or drop them off last between
            20:00 Hrs &amp; 06:00 Hrs IST. If it is necessary for a female employee
            to be picked up or dropped off during this time, a co-male employee
            or company security personnel must accompany her in the cab and
            provide an escort until she reaches her destination. We at SCL ensure
            to inform the Transportation User about any changes in vehicle details,
            including the driver or the vehicle, beyond the information shared via
            SMS. Our drivers and staff are trained to maintain professionalism,
            efficiency, and respect towards our associates. Additionally, we have
            instructed them not to engage in any personal discussions with our
            Transportation Users.
          </p>
        </div>
      </section>

      {/* 3. SCL Offering - LEFT Text | RIGHT Car - LAST */}
      <section className="section advantages-section">
        <div className="container advantages-row">
          {/* LEFT - TEXT */}
          <div className="advantages-text">
            <span className="advantages-label">— How We Do</span>
            <h2>
              SCL Offering <span>Advantages</span>
            </h2>
            <p>
              SCL offers the advantage of our organization's extensive expertise
              across various functions, service standards, and customer
              satisfaction. Building a transparent partnership with SCL means
              experiencing:
            </p>
          </div>

          {/* RIGHT - CAR IMAGE */}
          <div className="advantages-img">
            <img src={solutions} alt="SCL Fleet Cars" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
    </div>
    </div>
  );
}