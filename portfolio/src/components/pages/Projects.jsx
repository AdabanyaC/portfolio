import React from "react";
import TypeIt from "typeit-react";
import Navbar from "../layout/Navbar";
import ProjectList from "../projects/ProjectList";

export default function Projects() {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-4 px-5 pt-5">
            <TypeIt>
              <h6 className="display-3 text-brown" style={{ width: "400px" }}>
                My Projects.
              </h6>
            </TypeIt>
          </div>
          <div>
            <ProjectList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
