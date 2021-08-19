import React from "react";
import { NavLink } from "react-router-dom";
import { LinkItem } from "./Reuse";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Clinton Adabanya
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto p-4 mb-2 mt-4 mb-lg-0">
              <LinkItem linkItem="Home" url="/" />
              <LinkItem linkItem="About" url="/about" />
              <LinkItem linkItem="Skills" url="/skills" />
              {/* <LinkItem linkItem="Book" url="/wise-unto-salvation" />
              <LinkItem linkItem="Podcast" url="/the360believer" /> */}
              <LinkItem linkItem="Projects" url="/projects" />
              <LinkItem linkItem="Contact" url="/contact" />
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
