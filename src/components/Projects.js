import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/Project1.png";
import colorSharp2 from "../assets/img/bg.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Microservice",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p style={{color:"white"}}>I'm do FrontEnd and UX/UI Project and Other  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p style={{color:"white"}}>I'm very new in Development website , UX/UI , FrontEnd and BackEnd.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-center"  style={{
          position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%",height: "100%", objectFit: "cover" ,
        }} src={colorSharp2} alt="Image" />
    </section>
  );
};
