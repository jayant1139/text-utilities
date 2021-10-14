import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="text-utilities/">
            {props.brandname}
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/text-utilities/">
                {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/text-utilities/about">
                {props.About}
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/text-utilities/contact">
                {props.Contact}
                </Link>
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
