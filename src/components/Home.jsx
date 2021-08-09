import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="checkbox" id="nav-toggle" />
        <div className="sidebar">
          <div className="sidebar-brand">
            <h2>
              <span className="las la-clinic-medical"></span> <span>Hospital</span>
            </h2>
          </div>
        </div>

        <div className="main-content">
          <header>
            <h2>
              <label for="nav-toggle">
                <span className="las la-bars"></span>
              </label>{" "}
              Tablero
            </h2>

            <div className="search-wrapper">
              <span className="las la-search"></span>
              <input type="search" placeholder="Buscar aquí" />
            </div>
            <div className="user-wrapper">
              <img src="img/Avatar.png" width="40px" height="40px" alt="" />
              <div>
                <h4>Administrador</h4>
                <small>Super Admin</small>
              </div>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
