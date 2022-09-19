import React from "react";
import Navbar from "../layout/Navbar";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid header__container">
        <div className="row">
          <Navbar />
          <div className="content__wrapper">
            <TypeIt>
              <span className="display-3 font-sans text-white">
                Hello, I'm
                <br /> Clinton Adabanya.
              </span>
            </TypeIt>
            {/* <a
              href="https://res.cloudinary.com/dbdgevqyn/image/upload/v1629392148/portfolio/Clinton_Adabanya_-_Frontend_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              
            </a> */}
            <div className="icons__wrapper">
              <div className="icons__wrapper__children">
                <a
                  href="https://res.cloudinary.com/dbdgevqyn/image/upload/v1629392148/portfolio/Clinton_Adabanya_-_Frontend_Engineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-file-person-fill bi-icon"></i>
                </a>
              </div>
              <div className="icons__wrapper__children">
                <a
                  href="https://github.com/adabanyac"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github bi-icon"></i>
                </a>
              </div>
              <div className="icons__wrapper__children">
                {" "}
                <a
                  href="https://linkedin.com/in/clinton-adabanya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin bi-icon"></i>
                </a>
              </div>
              <div className="icons__wrapper__children">
                <a
                  href="https://instagram.com/clintonadabanya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram bi-icon"></i>
                </a>
              </div>
              <div className="icons__wrapper__children">
                <a
                  href="https://twitter.com/adabanya1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter bi-icon"></i>
                </a>
              </div>
            </div>
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
