import React from "react";
import TypeIt from "typeit-react";
import Navbar from "../layout/Navbar";
import { InputField } from "../layout/Reuse";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-container full-screen">
        <div className="row">
          <Navbar />
          <div className="col-md-6 content__wrapper p-5">
            <TypeIt>
              <h6 className="display-3 text-brown">Let's connect...</h6>
            </TypeIt>
            <p className="text-size text-white">I'm available to work on your freelance web and mobile apps.</p>
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
          </div>

          <div className="col-md-6">
            <InputField type="text" placeholder="Full name" />
            <InputField type="email" placeholder="Your email" />

            <div class="styled-input wide">
              <textarea required />
              <label>Message</label>
            </div>

            <button className="btn btn-brown">Send</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
