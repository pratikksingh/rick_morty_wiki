import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
        <Link to="/" className="ubuntu fs-3 navbar-brand fw-bold ">
          Rick & Morty <span className="text-primary ">WiKi</span>
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
          <style jsx="true">
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }
              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>
          <i className="fas fa-bars open fw-bold text-dark"></i>
          <i className="fas fa-times close fw-bold  text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav fs-5">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                to="/"
                className="nav-link"
                aria-current="page"
              >
                Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episode" className="nav-link">
                Episode
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/location" className="nav-link">
                Location
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
