import React from "react";
import Carousel from "../layout/Carousel";
import Navbar from "../layout/Navbar";
import { Pagelist } from "../layout/Reuse";

export default function Projects() {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-4 content__wrapper p-5">
            <h1 className="display-1 text-brown">My Projects.</h1>
            <Pagelist listItem="Project Name" />
            <Pagelist listItem="Technologies Used" />
            <Pagelist listItem="Live Demo URL" />
          </div>
          <div className="col-md-6 text-center ms-5">
            <Carousel />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
