import React from "react";
import SimpleSlider from "../layout/Carousel";
import AsNavFor from "../layout/Carousel";
import Navbar from "../layout/Navbar";
import { Pagelist } from "../layout/Reuse";

export default function Projects() {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-6 content__wrapper p-5">
            <h1 className="display-1 text-brown">My Projects.</h1>
            <Pagelist listItem="Technologies Used" />
          </div>
          <div className="col-md-4 text-center ms-5">
            <AsNavFor />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
