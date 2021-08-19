import React from "react";
import Navbar from "../layout/Navbar";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid header__container">
        <div className="row">
          <Navbar />
          <div className="content__wrapper p-5">
            <TypeIt>
              <h6 className="display-3 text-white">
                Hello, I'm
                <br /> Clinton Adabanya.
              </h6>
            </TypeIt>
            <a
              href="https://res.cloudinary.com/dbdgevqyn/image/upload/v1629392148/portfolio/Clinton_Adabanya_-_Frontend_Engineer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icons__wrapper">
                <a
                  href="https://res.cloudinary.com/dbdgevqyn/image/upload/v1629392148/portfolio/Clinton_Adabanya_-_Frontend_Engineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bi bi-file-person-fill bi-icon"></i>
                </a>
                <a href="https://github.com/adabanyac" target="_blank" rel="noreferrer">
                  <i class="bi bi-github bi-icon"></i>
                </a>
                <a href="https://linkedin.com/in/clinton-adabanya" target="_blank" rel="noreferrer">
                  <i class="bi bi-linkedin bi-icon"></i>
                </a>
                <a href="https://instagram.com/clintonadabanya" target="_blank" rel="noreferrer">
                  <i class="bi bi-instagram bi-icon"></i>
                </a>
                <a href="https://twitter.com/adabanya1" target="_blank" rel="noreferrer">
                  <i class="bi bi-twitter bi-icon"></i>
                </a>
              </div>
            </a>
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
