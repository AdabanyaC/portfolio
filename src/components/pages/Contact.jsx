import React from "react";
import Navbar from "../layout/Navbar";
import { InputField } from "../layout/Reuse";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-6 content__wrapper p-5">
            <h1 className="display-1 text-brown">Let's connect...</h1>
            <p className="text-size text-white">I'm available to work on your freelance web and mobile apps.</p>
            <div className="icons__wrapper">
              <i class="bi bi-file-person-fill" style={{ fontSize: "2rem", color: "#ca9d75" }}></i>
              <i class="bi bi-github" style={{ fontSize: "2rem", color: "#ca9d75" }}></i>
              <i class="bi bi-linkedin" style={{ fontSize: "2rem", color: "#ca9d75" }}></i>
              <i class="bi bi-instagram" style={{ fontSize: "2rem", color: "#ca9d75" }}></i>
              <i class="bi bi-twitter" style={{ fontSize: "2rem", color: "#ca9d75" }}></i>
            </div>
          </div>

          <div className="col-md-6">
            <InputField type="text" placeholder="Full name" />
            <InputField type="email" placeholder="Your email" />

            <div class="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>

            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
