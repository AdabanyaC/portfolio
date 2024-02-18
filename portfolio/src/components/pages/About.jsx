import React from "react";
import TypeIt from "typeit-react";
import Navbar from "../layout/Navbar";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-8 content__wrapper p-5">
            <TypeIt>
              <h6 className="display-3 text-brown">About Me.</h6>
            </TypeIt>
            <p className="text-size text-white">
              I am a Front-end web developer with few years of experience under my belt. I've worked with firms in the
              Hospitality, Health and Real Estate industry respectively to deploy software solutions tailored for their
              business needs. We can work together to bring your dream to life.
            </p>
          </div>
          <div className="col-md-4 image__container"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
