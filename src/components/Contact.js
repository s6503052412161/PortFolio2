import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-info ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2>Your can Contact With</h2>
                  <form onSubmit={handleSubmit}>
                    <Row style={{textAlign:"center"}}>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value="inside162544@gmail.com" disabled />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value="0802190243" disabled />
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
