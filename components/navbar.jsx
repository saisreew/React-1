// Stateless function component
// sfc
import React from "react";

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand">LOGO</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav-pills justify-content-end">
            <li className="nav-item">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge badge-primary badge-pill ">
                {props.totalItems}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
