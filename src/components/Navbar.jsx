import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.brandname}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./About.jsx">
                {props.About}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                {props.Contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
// assigned propTypes to avoid any issues in future
Navbar.propTypes={
    brandname:PropTypes.string,
home:PropTypes.string,
about:PropTypes.string,
contact:PropTypes.string
}
// assigned default props 
Navbar.defaultProps={
    brandname:'Set Brand Name',
home:'Set home here',
About:'Set about here',
Contact:'Set contact here'
}
