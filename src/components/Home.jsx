import React from "react";
import Navbar from "./layout/Navbar";
// import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid header__container">
        <div className="row">
          <Navbar />
          <div className="content__wrapper p-5">
            <h3 className="display-1 text-white header__title">
              Hey! <br />
              I'm Clinton Adabanya.
            </h3>
            <p className="text-white header__body">Front End Developer, Writer and Podcaster.</p>
            <button className="btn btn-secondary">My Resume</button>
          </div>
        </div>
      </div>
      <div className="container-fluid header__container__alt">
        <div className="row"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;
