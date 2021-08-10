import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-8 content__wrapper p-5">
            <h3 className="display-1 text-brown">About Me.</h3>
            <p className="text-size text-white">
              I'm a Front-end Web Developer with over 2 years experience working with modern tools for Front-end web
              development. I love to talk and I love to write. These birthed my{" "}
              <NavLink to="/the360believer">podcast</NavLink> and my <NavLink to="wise-unto-salvation">book</NavLink>.
            </p>
          </div>
          <div className="col-md-4 image__container"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
