import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#f8f4e3"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="path/to/logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-2" />
          Shoes
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Information</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Collections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Extra</a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn me-2" style={{backgroundColor: "#eee4d7", color: "white"}}>Button</button>
            <button className="btn" style={{backgroundColor: "#63523d", color: "white"}}>Button</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
