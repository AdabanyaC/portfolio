import React from "react";
import Navbar from "../layout/Navbar";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-6 content__wrapper p-5">
            <h1 className="display-1 text-brown">My Skills</h1>
            <p className="text-size text-white">
              I'm strictly a Front-end developer but I'm looking to add mobile development to my list of proficiencies.
              I work very well with HTML, CSS, SASS, Bootstrap, TailwindCSS, JavaScript and ReactJS.
            </p>
          </div>

          <div className="col-md-6 text-brown content__wrapper">
            <div className="row">
              <div className="col-md-4">1</div>
              <div className="col-md-4">2</div>
              <div className="col-md-4">3</div>
              <div className="col-md-4">4</div>
              <div className="col-md-4">5</div>
              <div className="col-md-4">6</div>
              <div className="col-md-4">7</div>
              <div className="col-md-4">8</div>
              <div className="col-md-4">9</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
