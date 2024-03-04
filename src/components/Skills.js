import JS from "../assets/img/js.svg";
import HTML from "../assets/img/html.svg";
import CSS from "../assets/img/css.svg";
import DOCKER from "../assets/img/docker.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PHP from "../assets/img/php.svg";
import React from "../assets/img/React.svg";
import colorSharp from "../assets/img/background.jpg";
import Python from "../assets/img/python.svg"
import Figma from "../assets/img/figma.svg"
import GIT from "../assets/img/git.svg"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p style={{color:"black"}}>This is my Skill in web Development </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={GIT} alt="Image" />
                                <h5>Git Hub</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={PHP} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={Figma} alt="Image" />
                                <h5>Figma Desing</h5>
                            </div>
                            <div className="item">
                                <img src={JS} alt="Image" />
                                <h5>Java Scrip</h5>
                            </div>
                            <div className="item">
                                <img src={HTML} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={DOCKER} alt="Image" />
                                <h5>DOCKER</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            
        </div>
        <img className="background-image-center"  style={{
          position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%",height: "100%", objectFit: "cover" ,
        }} src={colorSharp} alt="Image" />
    </section>
  )
}
