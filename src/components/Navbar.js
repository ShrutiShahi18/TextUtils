import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
 return (
  <nav
   className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.textmode}`}
  >
   <div className="container-fluid">
    <a className="navbar-brand" href="#">
     {props.title}
    </a>
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
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
       <a href="#" className="nav-link active" aria-current="page">
        Home
       </a>
      </li>
      <li className="nav-item">
       <a href="/about" className="nav-link">
        {props.about}
       </a>
      </li>
     </ul>
     <form className="d-flex" role="search" id="form">
      <input
       className="form-control me-2"
       id="form input"
       type="search"
       placeholder="Search"
       aria-label="Search"
      />
      <button className="btn btn-primary mx-3" type="submit">
       Search
      </button>
      <div className={`form-check form-switch text-${props.textmode}`}>
       <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={props.togglemode}
       />
       <label
        className={`form-check-label text-${props.textmode}`}
        htmlFor="flexSwitchCheckDefault"
       >
        {props.text} Mode
       </label>
      </div>
     </form>
    </div>
   </div>
  </nav>
 );
}

Navbar.propTypes = {
 title: PropTypes.string.isRequired,
 about: PropTypes.string,
};

Navbar.defaultProps = {
 title: "This is TextUtils",
 about: "About TextUtils",
};
