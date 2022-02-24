import React from "react";
import Project1 from "./../../assets/1.png";
import Project2 from "./../../assets/2.png";
import Project3 from "./../../assets/3.png";
import Project4 from "./../../assets/4.png";
import Project5 from "./../../assets/5.png";
import Project6 from "./../../assets/6.png";
import Project7 from "./../../assets/7.png";
import Project8 from "./../../assets/8.png";
import Project9 from "./../../assets/9.png";

const ProjectList = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <div className="projects-container">
        <div className="projects-container-child">
          <a href="https://travel-website-opal.vercel.app/">
            <img
              src={Project1}
              alt="Travel Website built as a capstone project for my academy"
              className="projectImg"
            />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="https://datawarehouse-chi.vercel.app/">
            <img
              src={Project2}
              alt="Datawarehouse Project built as a capstone project for my academy."
              className="projectImg"
            />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="https://www.plotter.ng/">
            <img src={Project3} alt="Plotter | Be your own accountant" className="projectImg" />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="https://gravelhomes.ng/">
            <img src={Project4} alt="Gravel Homes Limited" className="projectImg" />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="https://www.getstarted.com.ng/">
            <img src={Project5} alt="Getstarted Academy" className="projectImg" />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="https://cuevangelismteam.herokuapp.com/">
            <img src={Project6} alt="Covenant University Evangelism Team" className="projectImg" />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="http://healarheath.herokuapp.com/">
            <img src={Project7} alt="Healar Health" className="projectImg" />
          </a>
        </div>
        <div className="projects-container-child">
          <a href="https://pig-game-gamma.vercel.app/">
            <img src={Project8} alt="Pig Game" className="projectImg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
