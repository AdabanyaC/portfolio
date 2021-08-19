import React from "react";
import TypeIt from "typeit-react";
import Navbar from "../layout/Navbar";
import { Pagelist } from "../layout/Reuse";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-8 content__wrapper p-5">
            <TypeIt>
              <h6 className="display-3 text-brown">My Skills.</h6>
            </TypeIt>
            <Pagelist
              listItem="Front End Tools"
              content="HTML5, CSS3, SASS, Bootstrap, TailwindCSS,
              JavaScript, ReactJS."
            />
            <Pagelist listItem="Collaboration" content="Github, Github Actions." />
            <Pagelist listItem="Deployment" content="Heroku, Vercel, Netlify, cPanel Hosting, AWS." />
            <Pagelist listItem="Documentation" content="Docusaurus." />
            <Pagelist listItem="Familiar" content="NodeJS, PHP, MongoDB, MySQL, Github, Heroku, Figma." />
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3 hexagon m-3"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
